import React from 'react';
import './BookInfoRow.css';
import axios from 'axios';
import { connect } from 'react-redux';


function BookInfoRow(props){
    // define the function inside here to be able to refer to it in the JSX
    
    function deleteBook(e){
        axios.delete('http://localhost:3000/books/' + props.book.id)
        .then(response => console.log('Book', props.book.id, 'was successfully delete.', response))
        .catch(err => console.error(err));
        e.preventDefault(); // call if want to do own behaviour
        // remove book from state in order to prevent double deleting
    }

    function foo(e){
        console.log(e);
    }

    return (
        <tr>
            <td><img src={props.book.imgUrl} alt="Book Img"/></td>
            <td>
                <div className="title">{props.book.title}</div>
                <div className="author">by {props.book.author}</div>
                <div className="isbn">ISBN10 : {" "+props.book.isbn10}</div>
                <div className="desc"><p>{props.book.description}</p></div>
            </td>
            <td className="options">
                <div><button href="#" onClick={foo}>Edit</button></div>
                <div><button href="#" onClick={deleteBook} >Delete</button></div>
            </td>
        </tr>
    );
}

export default BookInfoRow;