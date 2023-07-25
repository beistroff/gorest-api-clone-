import React from "react"
import ReactDOM from "react-dom"
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import axios from './axios';

import App from "./App"
import './style-index.css'
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </>
)

// BrowserRouter is the most common router

// HashRouter very similar to BrowserRouter, but HashRouter store links like hash, 
//so it adds #/users and so on. Everything that comes after #/, it's not actually the url
// HistoryRouter takes control of history elements, like direct browser history 

// also MemoryRouter is useful for testing our BrowserRouter, so it serves for writing the unit-tests