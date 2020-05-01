import React from 'react';

export default class ComedianDetail extends React.Component {
    render() {
        return(
            <div className="comedianDetail">
                <section>
                    <form id="record-comic">
                        <div className="detail-section">
                            <label htmlFor="firstName">First Name:</label>
                            <p>John</p>
                        </div>
                        <div className="detail-section">
                            <label htmlFor="lastName">Last Name:</label>
                            <p>Smith</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-phone">Phone:</label>
                            <p>123-456-7890</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-email">Email:</label>
                            <p>email@gmail.com</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="bio-summary">Bio:</label>
                            <p>Bio</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="note-summary">Notes:</label>
                            <p>Notes</p>
                        </div>
                        <div className="form-section">
                            <label htmlFor="years-experience">Years Experience:</label>
                            <p>Years Experience</p>
                        </div>
                        <div className="form-section">
                            <p>Comedic Style</p>
                            <input type="radio" name="comedy-type" value="0" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Anecdotal</span>
                            </label>
                            <input type="radio" name="comedy-type" value="1" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Deadpan</span>
                            </label>
                            <input type="radio" name="comedy-type" value="2" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Improvisational</span>
                            </label>
                            <input type="radio" name="comedy-type" value="3" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Wit/Word Play</span>
                            </label>
                            <input type="radio" name="comedy-type" value="4" className="comedy-type-radio"/>
                            <label htmlFor="comedy-type">
                                <span>Observational</span>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </section>
            </div>
        );
    }
}