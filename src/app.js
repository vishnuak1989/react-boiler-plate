import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'normalize.css'
import './styles/styles.scss'
import AppRouter from './router/AppRouter'
import configureStore from './store/configureStore'
import LoadingPage from './components/LoadingPage'


const store = configureStore();
const jsx = ( <
    Provider store = { store } >
    <
    AppRouter / >
    <
    /Provider>
);


ReactDOM.render(<LoadingPage />, document.getElementById('app'));
ReactDOM.render(jsx, document.getElementById('app'));

