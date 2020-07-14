import React from 'react';
import Nav from '../Nav/Nav.js';
import './LandingPage.css';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
   
export default class LandingPage extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => {},
        submitAuth: () => {}
    }
    static contextType = ApiContext;

    handleSubmitAuth = event => {
        event.preventDefault()
        const newUser = {}
        newUser.email = event.target.email.value;
        newUser.pw = event.target.pw.value;
        this.props.onRegistrationSuccess();
        
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
                this.context.token = token.authToken;
            })
            .catch(error => {
                console.error({ error })
            })
    }

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
                this.context.submitAuth();
            })
            .catch(error => {
                console.error({ error })
            })
    }

    render() {
        return (
            <>
                <Nav />
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
                            <input type="text" name="email" id="email" /><br />
                            <label htmlFor="pw">Password</label>
                            <input type="password" name="pw" id="pw" /><br />
                            <button type='submit'>Sign Up</button>
                        </form>
                        <h2>Login</h2>
                        <form onSubmit={this.handleSubmitAuth} className='login-form'>
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" /><br />
                            <label htmlFor="pw">Password</label>
                            <input type="password" name="pw" id="pw" /><br />
                            <button type='submit'>Login</button>
                        </form>
                    </section>
                </div>
            </>
        )
    }
}