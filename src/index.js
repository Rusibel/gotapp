import React from 'react';
// import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { render } from "react-dom";
import CharacterPage from './components/pages/characterPage';
import BooksPage from './components/pages/booksPage';
import HousesPage from './components//pages/housesPage';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link
  } from "react-router-dom";
import { BooksItem } from './components/pages/booksPage';


const rootElement = document.getElementById("root");
render(
    <Router>
        <Routes>
            <Route path='/' element={<App />}>
                <Route path='characters' element={<CharacterPage/>}/>
                <Route path='/houses' element={<HousesPage/>}/>
                {/* <Route path='/books' element={<BooksItem/>}/> */}
                <Route path='books' element={<BooksPage/>}/>
                <Route path="books/:bookId" element={<BooksItem/>} />
                {/* </Route> */}
                <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    </main>
                }
                />
            </Route>
        </Routes>
    </Router>,
  rootElement
);

