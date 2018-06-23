import {BrowserRouter,Switch,Route} from 'react-router-dom'
import React from 'react'
import Dashboard from '../components/Dashboard'
import About from './../components/About'
import Header from './../components/Header'
import PageNotFound from './../components/PageNotFound'

const AppRouter=() =>(
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>

);
export default AppRouter;