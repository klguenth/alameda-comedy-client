import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default class Nav extends React.Component {
    render() {
        let buttons;
        if (this.props.loggedIn) {
            buttons = <><li><Link to='/'>Home</Link></li>
            <li><Link to='/showList'>Shows</Link></li>
            <li><Link to='/comedianList'>Comedians</Link></li></>
        }
        return(
            <nav className="nav">
                <ul>
                    {buttons}
                </ul>
            </nav>
        )
    }
}