import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// redux things
import { Provider } from 'react-redux';
// import { addItem, deleteItem } from './actions.js';
import { createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk"
import bookApp from './reducers.js';
const store = createStore(bookApp, applyMiddleware(thunk));
console.log(store.getState());

// everytime store update log the state
// subscribe returns unsubscribe function
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addItem({title: "book"}));
// store.dispatch(addItem({title: "Yeet"}));
// store.dispatch(deleteItem(0));
unsubscribe(); // stop listening to store updates

ReactDOM.render(
    (<Provider store={store}>
        <App />
    </Provider>), 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
