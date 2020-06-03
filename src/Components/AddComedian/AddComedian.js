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
                            <label htmlFor="comic-name">First Name</label>
                            <input type="text" name="comic-name" placeholder="John" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-name">Last Name</label>
                            <input type="text" name="comic-name" placeholder="Smith" required />
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
                            <label htmlFor="bio-summary">Bio</label>
                            <textarea name="bio-summary" rows="5" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10" required></textarea>
                        </div>
                        <div className="form-section">
                        <label htmlFor="form-section">Category</label>
                            <select name="category" id="category">
                                <option value="Open Mic">Open Mic</option>
                                <option value="Audition">Audition</option>
                                <option value="Late Show">Late Show</option>
                                <option value="Showcase">Showcase</option>
                                <option value="Host">Host</option>
                                <option value="Feature">Feature</option>
                                <option value="Headliner">Headliner</option>
                            </select>
                        </div>
                        <div className="form-section">
                        <label htmlFor="form-section">Gender</label>
                            <select name="gender" id="gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="age">Age</label>
                            <input type="number" name="age" placeholder="25" />
                        </div>
                        <div className="form-section">
                        <label htmlFor="form-section">Race</label>
                            <select name="race" id="race">
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Asian">Asian</option>
                                <option value="Hispanic">Hispanic</option>
                                <option value="Native American">Native American</option>
                                <option value="Pacific Islander">Pacific Islander</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <p>Passed vs. Not Passed</p>
                            <input type="radio" name="passed-type" value="0" className="passed-type-radio"/>
                                <label htmlFor="passed-type">
                                    <span>Passed</span>
                                </label><br />
                            <input type="radio" name="not-passed-type" value="0" className="not-passed-type-radio"/>
                                <label htmlFor="not-passed-type">
                                    <span>Not Passed</span>
                            </label><br />
                        </div>
                        <div className="form-section">
                            <p>Clean vs. Explicit</p>
                            <input type="radio" name="clean-type" value="0" className="clean-radio"/>
                                <label htmlFor="clean-type">
                                    <span>Clean</span>
                                </label><br />
                            <input type="radio" name="explicit-type" value="0" className="explicit-radio"/>
                                <label htmlFor="explicit-type">
                                    <span>Explicit</span>
                            </label><br />
                        </div>
                        <br />
                        <div className="form-section">
                            <label htmlFor="ssn">SSN</label>
                            <input type="number" name="ssn" placeholder="123-45-6789" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="street">Street</label>
                            <input type="text" name="street" placeholder="123 Main Street" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" placeholder="Alameda" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="State">State</label>
                            <input type="text" name="state" placeholder="CA" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="zip">Zipcode</label>
                            <input type="text" name="zip" placeholder="94501" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="website">Website</label>
                            <input type="text" name="website" placeholder="www.alamedacomedy.com" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="facebook">Facebook Handle</label>
                            <input type="text" name="facebook" placeholder="JohnSmithComedy" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="twitter">Twitter Handle</label>
                            <input type="text" name="twitter" placeholder="@johnsmithcomedy" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="instagram">Instagram Handle</label>
                            <input type="text" name="instagram" placeholder="@johnsmithcomedy" />
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