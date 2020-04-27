import React from 'react';
   
export default class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <nav role="navigation">Nav</nav>
                <header role="banner">
                    <h1>Alameda Comedy</h1>
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
                    <form class='signup-form'>
                        <label for="username">Email</label>
                        <input type="text" name='username' id='username' /><br />
                        <label for="password">Password</label>
                        <input type="password" name='password' id='password' /><br />
                        <button type='submit'>Sign In</button>
                    </form>
                </section>
                <footer role="content-info">Footer</footer>
            </div>

        )
    }
}