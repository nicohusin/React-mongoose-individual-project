import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Blog from './blog'
import SignUp from './signup'
import SignIn from './signin'

export default function RouterBlog() {
  return (
  <Router>
  <Route exact path = '/' component={Blog}/>
  <Route path = '/signup' component={SignUp}/>
  <Route path = '/signin' component={SignIn}/>
</Router>
  )

}