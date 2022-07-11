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
        <Route path="/Fiction" element={<BooksScreen />}></Route>
        <Route path="/Philosophy" element={<BooksScreen />}></Route>
        <Route path="/Drama" element={<BooksScreen />}></Route>
        <Route path="/History" element={<BooksScreen />}></Route>
        <Route path="/Humour" element={<BooksScreen />}></Route>
        <Route path="/Adventure" element={<BooksScreen />}></Route>
        <Route path="/Politics" element={<BooksScreen />}></Route>
      </Routes>
    </Router>
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
