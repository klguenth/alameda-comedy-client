import React from 'react';

export default class EditComedian extends React.Component {
    render() {
        return(
            <div>
                <header>
                    <h1>Edit Comedian</h1>
                </header>
                <section>
                    <form id="record-comic">
                        <div class="form-section">
                            <label for="comic-name">Name</label>
                            <input type="text" name="comic-name" placeholder="John Smith" required />
                        </div>
                        <div class="form-section">
                            <label for="comic-phone">Phone</label>
                            <input type="text" name="comic-phone" placeholder="123-456-7890" required />
                        </div>
                        <div class="form-section">
                            <label for="comic-email">Email</label>
                            <input type="text" name="comic-email" placeholder="email@gmail.com" required />
                        </div>
                        <div class="form-section">
                            <label for="comic-youtube">YouTube</label>
                            <input type="text" name="comic-youtube" placeholder="link.com" required />
                        </div>
                        <div class="form-section">
                            <label for="bio-summary">Bio</label>
                            <textarea name="bio-summary" rows="5" required />
                        </div>
                        <div class="form-section">
                            <label for="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10" required></textarea>
                        </div>
                        <div class="form-section">
                            <label for="years-experience">Years Experience</label>
                            <input type="number" name="years-experience" placeholder="8" />
                        </div>
                        <div class="form-section">
                            <p>Comedic Style</p>
                            <input type="radio" name="comedy-type" value="0" class="comedy-type-radio" checked/>
                            <label for="comedy-type">
                                <span>Anecdotal</span>
                            </label>
                            <input type="radio" name="comedy-type" value="1" class="comedy-type-radio"/>
                            <label for="comedy-type">
                                <span>Deadpan</span>
                            </label>
                            <input type="radio" name="comedy-type" value="2" class="comedy-type-radio"/>
                            <label for="comedy-type">
                                <span>Improvisational</span>
                            </label>
                            <input type="radio" name="comedy-type" value="3" class="comedy-type-radio"/>
                            <label for="comedy-type">
                                <span>Wit/Word Play</span>
                            </label>
                            <input type="radio" name="comedy-type" value="4" class="comedy-type-radio"/>
                            <label for="comedy-type">
                                <span>Observational</span>
                            </label>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </section>
            </div>
        )
    }
}