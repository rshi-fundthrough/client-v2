import React from 'react';
import './App.css';
// import { render } from 'react-dom';
import BookInfoList from "../src/components/BookInfoList";
import { Route, BrowserRouter} from 'react-router-dom'

class App extends React.Component {
  render(){
    // make the list of book obj to pass into book info row component
    // try referring to instance variable
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={BookInfoList} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
