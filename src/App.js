import React from 'react';
import './App.css';
import { BrowserRouter,Route,Link } from 'react-router-dom';
import {connect} from 'react-redux'
import Home from './Home';
import Posts from './post/Post'
import Details from './user/Details'
import Comments from './comment/Comments'
import UserList from './user/UserList'
import User from './user/User'
import {Nav ,Navbar} from 'react-bootstrap'

function App() {
  return (
    <BrowserRouter>
    <Navbar bg="light" expand="lg">
  <Navbar.Brand >Blog-UI</Navbar.Brand>
  <Nav.Item>
  <Link to='/' className='padding mr-3 text-decoration-none text-info' >home</Link>
  <Link to='/posts' className='padding mr-3 text-decoration-none text-info'>posts</Link>
  <Link to='/users' className='padding mr-3 text-decoration-none text-info'>users</Link>
  </Nav.Item>
    </Navbar>
    
    

    <Route path='/' component={Home} exact={true}/>
    <Route path='/posts' component={Posts} exact={true}/>
    <Route path='/posts/:id' component={Details} exact={true}/>
    <Route path='/post/:id/comment' component={Comments}/>
    <Route path='/users' component={UserList} exact={true}/>
    <Route path='/user/:id' component={User}/>

    </BrowserRouter>
  )
}


export default connect()(App);
