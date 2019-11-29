import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import configureStore from './store/configureStore'
import {startSetUsers} from './actions/users'
import {startSetPosts} from './actions/posts'
import {images} from './actions/image'

const store=configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(startSetUsers())
store.dispatch(startSetPosts())
store.dispatch(images())

const ele=(
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(ele, document.getElementById('root'));


