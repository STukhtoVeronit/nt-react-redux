import React from 'react';
import { NavLink, withRouter} from 'react-router-dom';

const NavBar = (props) =>{
    // setTimeout(() => props.history.push('/about'), 2000);
    return (
        <nav className="nav-wrapper red darken-3">
            <div className="container">
                <NavLink  to = "/" className="brand-logo">Poke'Times</NavLink>
                <ul className="right ">
                    <li><NavLink to = "/">Home</NavLink></li>
                    <li><NavLink to = "/about">about</NavLink></li>
                    <li><NavLink to = "/contact">contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
};

export default withRouter(NavBar); //high order component