import React from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
    return (
      <nav className='ui secondary menu'>
        <div className="ui container">
          <Link className="ui item" to='/'>My Portfolio</Link>
            <div className="right menu">
              <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/about'>About Me</NavLink>
              <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/Projects'>Projects</NavLink>
              <NavLink className="ui item" activeStyle={{ fontWeight: "bold" }} to='/jobs'>Jobs</NavLink>
            </div>
        </div>
      </nav>
    )
  }

export default Header