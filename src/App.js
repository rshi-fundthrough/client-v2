import React from 'react';
import axios from 'axios';
import './App.css';
// import { render } from 'react-dom';
import BookInfoRow from "./BookInfoRow.js";

class App extends React.Component {
  // pissed
  // check if the database has any books, if none then populate with ones from NYT
  constructor(props){
    super(props);
    this.state = {
      bookInfo: [
        {
          title: "Harry Potter",
          author:  "J.K. Rowling",
          isbn10:  "21111111",
          imgUrl:  "https://s1.nyt.com/du/books/images/9780385544184.jpg"
        },
        {
          title: "Macbeth",
          author: "Rowling",
          isbn10: "31111111",
          imgUrl: ""
        },
        {
          title: "Coding",
          author: "J.K.",
          isbn10: "41111111",
          imgUrl: ""
        }
      ]
    }

  }

  componentDidMount(){
    axios.get('localhost:3000/books')
    .then(response=>{
      console.log(response);
    })
    .catch(err=>{
      console.error(err);
    });
  }

  updateBook(){

  }

  deleteBook(){

  }

  // function for api call that stores book in db
  // fn for checking if db is empty


  render(){
    // make the list of book obj to pass into book info row component
    // try referring to instance variable
    
    this.state.bookInfo.forEach( book => {
      console.log(book);
    });

    // use map function to display all the rows
    let bookList = this.state.bookInfo.map( (bookObj,index) => {
      return <BookInfoRow key={index} book={bookObj}/>;
    });

    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <table className="container">
            <tbody>{bookList}</tbody>
          </table>
        </header>
      </div>
    )
  };
}

export default App;
