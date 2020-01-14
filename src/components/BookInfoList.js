import React from 'react';
import BookInfoRow from "./BookInfoRow.js";
import { connect } from 'react-redux';
// get action creators 
import { deleteItem, addItem, getBooks } from "../actions";


class BookInfoList extends React.Component{

    // check if the database has any books, if none then populate with ones from NYT
    componentDidMount(){
        // call to server api to check the items in 
        this.props.getBooks();
    }

    render(){
        // use map function to display all the rows
        let bookList = this.props.books.map( (bookObj,index) => {
            return <BookInfoRow key={index} book={bookObj} index={index}/>;
        });
    
        return (
            <div className="App">
                <header className="App-header">
                    <table className="container">
                        <tbody>{bookList}</tbody>
                    </table>
                </header>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        books: state.books // could use another function to process if necessary but this one is not 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: index => dispatch(deleteItem(index)),
        onGetBook: book => dispatch(addItem(book)),
        getBooks: () => getBooks()(dispatch)
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookInfoList);