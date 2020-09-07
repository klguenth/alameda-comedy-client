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
        let logo;
        if (this.props.isLoggedIn) {
            logo = <img src="/images/logo.png" height="75px" alt="alameda comedy logo" className="navLogo" />
            buttons = <>
            <li className="homeLink"><Link to='/'>Home</Link></li>
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
            <>
                <nav className="nav">
                    {logo}
                    <ul>
                        {buttons}
                    </ul>
                </nav>
            </>
        )
    }
}

export default withRouter(Nav)