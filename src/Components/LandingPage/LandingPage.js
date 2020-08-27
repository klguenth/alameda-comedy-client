import React from 'react';
import './LandingPage.css';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import TokenService from '../../token-service.js';
   
export default class LandingPage extends React.Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
      }

    constructor(props) {
        super(props);
        this.renderLoginLink = this.renderLoginLink.bind(this);
        this.renderLogoutLink = this.renderLogoutLink.bind(this);
        this.state = {
            loginError: null,
            registerError: null,
        }
    }
    static contextType = ApiContext;

    renderLoginLink() {
        this.context.isLoggedIn = true;
    }

    renderLogoutLink() {
        this.context.isLoggedIn = false;
    }

    handleSubmitBasicAuth = event => {
        event.preventDefault()
        const { email, pw } = event.target
        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(email.value, pw.value)
        )
    }

    //login form
    handleSubmitAuth = event => {
        event.preventDefault()
        const newUser = {}
        newUser.email = event.target.email.value;
        newUser.pw = event.target.pw.value;
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
            })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
            .then(token => {
                this.props.history.push('/')
                TokenService.saveAuthToken(token.authToken)
                this.context.token = token.authToken;
                this.props.setLoggedIn();
            })
            .catch(error => {
                this.setState({
                    loginError: error.error
                })
                console.error({ error })
            })
    }

    //registration form
    handleSubmitUser = event => {
        event.preventDefault()
        const newUser = {}
        newUser.full_name = event.target.full_name.value;
        newUser.email = event.target.email.value;
        newUser.pw = event.target.pw.value;
        this.props.onRegistrationSuccess();
        
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
            })
            .then(res => {
                return (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            })
            .then(newUser => {
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({
                    registerError: error.error
                })
                console.error({ error })
            })
    }

    render() {
        const isLoggedIn = this.context.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <button onClick={this.renderLogoutLink} />;
        } else {
            button = <button onClick={this.renderLoginLink} />;
        }
        let registerError;
        if (this.state.registerError) {
            registerError = this.state.registerError;
        }
        let loginError;
        if (this.state.loginError) {
            loginError = this.state.loginError;
        }
        return (
            <>
                <div className="landingContainer">
                    <img src="/images/logo.png" height="200px" alt="alameda comedy logo" />
                    <header role="banner">
                        <h1>Alameda Comedy Club</h1>
                    </header>
                    <section>
                        <h2>A management tool for your hospitality and entertainment venue.</h2>
                    </section>
                    <section>
                        <h2>Create and view performer demographics</h2>
                        <p>Create and maintain records of scheduled performers- including style, influences, frequency, etc.</p>
                    </section>
                    <section>
                        <h2>Sign Up</h2>
                        <form onSubmit={this.handleSubmitUser} className='signup-form'>
                            <label htmlFor="fullname">Full Name</label>
                            <input type="text" name="full_name" id="full_name" /><br />
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="email" /><br />
                            <label htmlFor="pw">Password</label>
                            <input type="password" name="pw" className="pw" /><br />
                            <button type='submit'>Sign Up</button>
                        </form>
                        <p>{registerError}</p>
                        <h2>Login</h2>
                        <form onSubmit={this.handleSubmitAuth} className='login-form'>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" className="email" /><br />
                            <label htmlFor="pw">Password</label>
                            <input type="password" name="pw" className="pw" /><br />
                            <button type='submit'>Login</button>
                        </form>
                        <p>Following succesful login, the navigation bar will appear at the top of the page.</p>
                        <p>{loginError}</p>
                    </section>
                </div>
            </>
        )
    }
}