import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import './Nav.css';
import { withRouter } from "react-router-dom";

class Nav extends React.Component {

    static contextType = ApiContext;

    static defaultProps = {
        onRegistrationSuccess: () => {},
        onLoginSuccess: () => {},
        submitAuth: () => {},
    }

    render() {
        let buttons;
        if (this.props.isLoggedIn) {
            buttons = <><li><Link to='/'>Home</Link></li>
            <li><Link to='/showList'>Shows</Link></li>
            <li><Link to='/comedianList'>Comedians</Link></li>
            <button 
                onClick={() => {
                    this.context.handleLogout()
                    this.props.history.push('/')
                }}>
                    Logout
            </button></>
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

export default withRouter(Nav)