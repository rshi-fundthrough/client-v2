import React from 'react';
import axios from 'axios';
import BookInfoRow from "./BookInfoRow.js";

class BookInfoList extends React.Component{
    // no state just props use default constructor
    /*
        props = {
            books: [ {
                id,
                title,
                author,
                isbn10,
                imgUrl,
                description
            }, ... ],
            onDelete,
            onGetBook

        }
    */

    // check if the database has any books, if none then populate with ones from NYT
    componentDidMount(){
        // call to server api to check the items in db
        axios.get('http://localhost:3000/books')
        .then(response => {
        if(response.data.length === 0){
            // if there are no items in db make call to NYT
            console.log('No elements in api calling NYT api');
            this.getNYTBooks();
        } else {
            // there are items just slap them in the client
            console.log(response.data);
            this.props.onMassGet(response.data);
            // this.setState({ bookInfo: response.data });
        }
        })
        .catch(err=>{
        console.error(err);
        });
    }

    getNYTBooks(){
        // call the NYT api
        axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=SOCAlRIHdoYLR2gGIUGknceo5m8rACnt')
        .then(response=>{
          console.log('Received NYT books');
          // console.log(response.data.results.books);
          this.setThisBooks(response.data.results.books);
        })
        .catch(err => console.error(err));
    }
    
    // the iterating and POST req works, but the cmp is not immediately updating with the response
    setThisBooks(bookList){
        // takes in array and populates this.state.booksInfo with info -- WILL OVERWRITE ALL THE BOOKS
        // don't use the tempList thing I don't think it's actually being appended to
        let temp = []
        bookList.forEach( bk => {
            temp.push({
                title: bk.title,
                author: bk.author,
                isbn10: bk.primary_isbn10,
                description: bk.description,
                imgUrl: bk.book_image
            });    
            // this.props.onGetBook(response.data); // use the response not bk
        });
        
        axios.post('http://localhost:3000/books', {
            // id is generated by the DB don't explicitly set
            books: temp    
        }).then(resp => {
            console.log(resp);
            this.props.onMassGet(resp.data);
        }).catch();
        
    }

    render(){
        // use map function to display all the rows
        let bookList = this.props.books.map( (bookObj,index) => {
            return <BookInfoRow key={index} book={bookObj} index={index}/>;
        });
    
        return (
            <div className="App">
                <header className="App-header">
                    {/* <img src={logo} className="App-logo" alt="logo" />
                    <p> Edit <code>src/App.js</code> and save to reload. </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" > Learn React </a> */}
                    <table className="container">
                        <tbody>{bookList}</tbody>
                    </table>
                </header>
            </div>
        );
    }
}

export default BookInfoList;