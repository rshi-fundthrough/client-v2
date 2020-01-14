import { connect } from 'react-redux';
import BookInfoList from '../components/BookInfoList';
// get action creators 
import { deleteItem, addItem, getBooks } from "../actions";

// this cmp is for the layer for BookList that iteracts with the store

const mapStateToProps = state => {
    return {
        books: state.books // could use another function to process if necessary but this one is not 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDelete: index => {
            dispatch(deleteItem(index));
        },
        onGetBook: book => {
            dispatch(addItem(book));
        },
        getBooks: () => getBooks()
        
    }
}

const BookListContainer = connect(mapStateToProps, mapDispatchToProps)(BookInfoList);

export default BookListContainer;