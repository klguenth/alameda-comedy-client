import React from 'react';
import Nav from '../Nav/Nav.js';
import './LandingPage.css';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
   
export default class LandingPage extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => {},
    }
    static contextType = ApiContext;

    handleSubmitAuth = event => {
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
                this.context.
                window.location.reload()
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
                    <img src="/images/logo.png" height="200px" />
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
                        <h2>Login</h2>
                        <form onSubmit={this.handleSubmitAuth} className='signup-form'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="full_name" id="full_name" /><br />
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" id="email" /><br />
                            <label htmlFor="pw">Password</label>
                            <input type="password" name="pw" id="pw" /><br />
                            <button type='submit'>Sign In</button>
                        </form>
                    </section>
                </div>
            </>
        )
    }
}