import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

