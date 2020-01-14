import React from 'react';
import './BookInfoRow.css';
import { deleteBook, updateBook } from '../actions.js';
import { connect } from 'react-redux';


class BookInfoRow extends React.Component {
    // define the function inside here to be able to refer to it in the JSX

    constructor(props){
        super(props);
        this.state = {
            isEdittingTitle: false,
            isEdittingAuthor: false,
            title: this.props.book.title,
            author: this.props.book.author,
            tempTitle: this.props.book.title,
            tempAuthor: this.props.book.author

        }
    }
    
    // functions that use this have to be => or 'this' will be binded to the component that was clicked
    // if called from a button or something

    deleteBook = () => {
        deleteBook(this.props.book.id, this.props.index)(this.props.dispatch);
    }

    editTitle = e => {
        e.preventDefault();
        this.setState({
            isEdittingTitle: true
        });
    }
    handleChangeTitle = e => {
        e.preventDefault();
        this.setState({
            tempTitle: e.target.value
        });
    }
    
    editAuthor = e => {
        e.preventDefault();
        this.setState({
            isEdittingAuthor: true
        });
    }
    handleChangeAuthor = e => {
        e.preventDefault();
        this.setState({
            tempAuthor: e.target.value
        });
    }

    saveBook = e => {
        e.preventDefault(); // call if want to do own behaviour
        // grab the values from the input fields send request and change state on resolve, cancel on reject 
        let t = this.state.tempTitle;
        let a = this.state.tempAuthor;
        updateBook(this.props.index, t, a, this.props.book)(this.props.dispatch) // doing dispatch(...) and ..()(dispatch) both work
        .then(response => {
            // update book in state
            console.log('Book', this.props.book.id, 'was successfully updated.', response);
            this.setState({
                isEdittingTitle: false,
                isEdittingAuthor: false,
                title: t,
                author: a
            });

        })
        .catch(err => {
            console.error(err);
            this.cancelEditBook();
        });   
    }

    cancelEditBook = () => {
        this.setState({
            isEdittingTitle: false,
            isEdittingAuthor: false,
            tempTitle: this.state.title,
            tempAuthor: this.state.author // reset the fields
        });
    }

    render(){
        // in a form input value is read only unless you use onChange, use defaultValue if mutable
        // use value in the form to be able to save values but have onChange to set it in the cmps state
        if(this.state.isEdittingTitle){
            return (
                <tr>
                    <td><img src={this.props.book.imgUrl} alt="Book Img"></img></td>
                    <td>
                        <form className="editForm">

                            <div><label>Title</label></div>
                            <div>
                                <input id="titleInput" type="text" value={this.state.tempTitle} onChange={this.handleChangeTitle}/>
                                <input type="submit" value="Save" onClick={this.saveBook}/>
                                <input type="submit" value="Cancel" onClick={this.cancelEditBook}/>
                            </div>
                            
                            <div className="author">by {this.props.book.author}</div>
                            <div className="isbn">ISBN10 : {" "+this.props.book.isbn10}</div>
                            <div className="desc"><p>{this.props.book.description}</p></div>
                        </form>
                    </td>
                </tr>
                
            );
        } else if(this.state.isEdittingAuthor){
            return (
                <tr>
                    <td><img src={this.props.book.imgUrl} alt="Book Img"></img></td>
                    <td>
                        <form className="editForm">
                            <div className="title">{this.props.book.title}</div>

                            <div><label>Author</label></div>
                            <div>
                                <input id="authorInput" type="text" value={this.state.tempAuthor} onChange={this.handleChangeAuthor}/>
                                <input type="submit" value="Save" onClick={this.saveBook}/>
                                <input type="submit" value="Cancel" onClick={this.cancelEditBook}/>
                            </div>

                            <div className="isbn">ISBN10 : {" "+this.props.book.isbn10}</div>
                            <div className="desc"><p>{this.props.book.description}</p></div>
                        </form>
                    </td>
                </tr>
                
            );
        }
        else {
            return (
                <tr>
                    <td><img src={this.props.book.imgUrl} alt="Book Img"/></td>
                    <td className="clickToEdit">
                        <div className="title" onClick={this.editTitle}>{this.state.title}</div>
                        <div className="author" onClick={this.editAuthor}>by {this.state.author}</div>
                        <div className="isbn">ISBN10 : {" "+this.props.book.isbn10}</div>
                        <div className="desc"><p>{this.props.book.description}</p></div>
                        <div className="options"><button href="#" onClick={this.deleteBook}>Delete</button></div>
                    </td>
                </tr>
            );
        }
    }
}

export default connect()(BookInfoRow);