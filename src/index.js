import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HomeScreen, BooksScreen } from './Screens';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './Reducers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const store = createStore(reducer, {}, applyMiddleware(thunkMiddleware));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" exact element={<HomeScreen />}></Route>
        <Route path="/books/:genre" element={<BooksScreen />}></Route>
      </Routes>
    </Router>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
