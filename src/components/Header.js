import React from 'react'
import { NavLink } from 'react-router-dom'

const Header=()=>(
  <header className="header">
  <div className="header__content">
    <h1 className="header__title">TITLE</h1>
    <ul>
    <NavLink to="/" activeClassName="selected" exact={true}><button className="button">Dashboard</button></NavLink>
    <NavLink to="/about" exact={true}><button className="button">About</button></NavLink>
    </ul>
    </div>
  </header>
)

export default Header;
