import React from 'react';
import './App.css';
// import { render } from 'react-dom';
import BookListContainer from "./containers/BookListContainer.js";

class App extends React.Component {
  render(){
    // make the list of book obj to pass into book info row component
    // try referring to instance variable
    return (
      <BookListContainer/>
    );
  }
}

export default App;
