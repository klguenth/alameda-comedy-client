import React from 'react';
import { Link } from 'react-router-dom';
import ApiContext from '../../ApiContext';
import './Nav.css';
import TokenService from '../../token-service';
//TODO import context
//when logged in set token
//add logout button - clear token from local storage and context

export default class Nav extends React.Component {

    static contextType = ApiContext;

    static defaultProps = {
        onRegistrationSuccess: () => {},
        onLoginSuccess: () => {},
        submitAuth: () => {},
    }

    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { email, pw } = event.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(email.value, pw.value)
        )
    }

    renderLogoutLink() {
        return (
            <div className="logoutLink">
                <Link 
                onClick={this.handleLogoutClick}
                to='/'>
                    Logout
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className="loginLink">
                <Link to='/'>
                    Login
                </Link>
                {TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink()}
            </div>
        )
    }

    render() {
        let buttons;
        if (this.props.isLoggedIn) {
            buttons = <><li><Link to='/'>Home</Link></li>
            <li><Link to='/showList'>Shows</Link></li>
            <li><Link to='/comedianList'>Comedians</Link></li>
            <button type="submit">Logout</button></>
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