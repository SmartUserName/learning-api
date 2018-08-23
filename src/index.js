import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import Home from './Components/Home.js';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/News" component={App} />
        </div>
    </BrowserRouter>,
    rootElement
);