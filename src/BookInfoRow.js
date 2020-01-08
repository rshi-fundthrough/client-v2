import React from 'react';
import './BookInfoRow.css';

function BookInfoRow(props){
    return (
        <tr>
            <td><img src={props.book.imgUrl} alt="Book Img"/></td>
            <td>
                <div className="title">{props.book.title}</div>
                <div className="author">by {props.book.author}</div>
                <div className="isbn">ISBN10 : {" "+props.book.isbn10}</div>
            </td>
            <td className="options">
                <div>Edit</div>
                <div>Delete</div>
            </td>
        </tr>
    );
}

export default BookInfoRow;