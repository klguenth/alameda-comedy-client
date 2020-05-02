import React from 'react';
import './AddComedian.css';

export default class AddComedian extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>New Comedian</h1>
                </header>
                <section className="record-comic">
                    <form>
                        <div className="form-section">
                            <label htmlFor="comic-name">Name</label>
                            <input type="text" name="comic-name" placeholder="John Smith" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-phone">Phone</label>
                            <input type="text" name="comic-phone" placeholder="123-456-7890" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-email">Email</label>
                            <input type="text" name="comic-email" placeholder="email@gmail.com" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-youtube">YouTube</label>
                            <input type="text" name="comic-youtube" placeholder="link.com" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="bio-summary">Bio</label>
                            <textarea name="bio-summary" rows="5" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10" required></textarea>
                        </div>
                        <div className="form-section">
                            <label htmlFor="years-experience">Years Experience</label>
                            <input type="number" name="years-experience" placeholder="8" />
                        </div>
                        <div className="form-section">
                            <p>Comedic Style</p>

                            <input type="radio" name="comedy-type" value="0" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Anecdotal</span>
                            </label><br />

                            <input type="radio" name="comedy-type" value="1" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Deadpan</span>
                            </label><br />

                            <input type="radio" name="comedy-type" value="2" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Improvisational</span>
                            </label><br />

                            <input type="radio" name="comedy-type" value="3" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Wit/Word Play</span>
                            </label><br />

                            <input type="radio" name="comedy-type" value="4" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Observational</span>
                            </label><br />
                        </div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </section>
            </div>
        )
    }
}