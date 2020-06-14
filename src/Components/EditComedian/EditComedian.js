import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';

export default class EditComedian extends React.Component {

    static defaultProps = {
        editComedian: () => {},
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

//edit comedian in comedian list
    handleEditComedian = event => {
        event.preventDefault()
        const id = this.props.match.params.id;
        const index = this.findById(id);
        const comedianId = this.context.comedians[index].id;
        const modifiedComedian = {};
        modifiedComedian.first_name = event.target.first_name.value;
        modifiedComedian.last_name = event.target.last_name.value;
        modifiedComedian.phone = event.target.phone.value;
        modifiedComedian.email = event.target.email.value;
        modifiedComedian.bio = event.target.bio.value;
        modifiedComedian.notes = event.target.notes.value;
        modifiedComedian.category = event.target.category.value;
        modifiedComedian.gender = event.target.gender.value;
        modifiedComedian.age = event.target.age.value;
        modifiedComedian.race = event.target.race.value;
        modifiedComedian.passed = event.target.passed.value;
        modifiedComedian.clean = event.target.clean.value;
        modifiedComedian.ssn = event.target.ssn.value;
        modifiedComedian.street = event.target.street.value;
        modifiedComedian.city = event.target.city.value;
        modifiedComedian.st = event.target.st.value;
        modifiedComedian.zip = event.target.zip.value;
        modifiedComedian.website = event.target.website.value;
        modifiedComedian.facebook = event.target.facebook.value;
        modifiedComedian.twitter = event.target.twitter.value;
        modifiedComedian.instagram = event.target.instagram.value;

        fetch(`${config.REACT_APP_API_ENDPOINT}/api/comedian/${comedianId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedComedian),
            })
        .then(res => {
            if (!res.ok) {
                console.log('error')
            return res.json();
            }
        })
        .then((res) => {
            modifiedComedian.id = id;
            this.context.editComedian(modifiedComedian)
            this.props.history.push(`/comedianList`);
        });
    }
    findById(id) {
        for (let i = 0; i<this.context.comedians.length; i++) {
            if (parseInt(id) === this.context.comedians[i].id) {
                return i;
            }
        }
    }

    render() {
        let id = this.props.match.params.id;
        let index = this.findById(id)
        return(
            <div>
                <header>
                    <h1>Edit Comedian</h1>
                </header>
                <section>
                    <form id="record-comic" onSubmit={this.handleEditComedian}>
                        <div class="form-section">
                            <label for="first_name">Name</label>
                            <input type="text" name="first_name" defaultValue={this.context.comedians[index].first_name} required />
                        </div>
                        <div class="form-section">
                            <label for="last_name">Name</label>
                            <input type="text" name="last_name" defaultValue={this.context.comedians[index].last_name} required />
                        </div>
                        <div class="form-section">
                            <label for="comic-phone">Phone</label>
                            <input type="text" name="comic-phone" defaultValue={this.context.comedians[index].phone} required />
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