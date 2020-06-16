import React from 'react';
import Nav from '../Nav/Nav.js';
import './LandingPage.css';
   
export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Nav />
                <div className="landingContainer">
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
                        <form className='signup-form'>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" name="fullname" id="fullname" /><br />
                            <label htmlFor="username">Email</label>
                            <input type="text" name="username" id="username" /><br />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" /><br />
                            <button type='submit'>Sign In</button>
                        </form>
                    </section>
                </div>
            </>
        )
    }
}