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
        return (
            <ApiContext.Consumer>
                <div>
                <header>
                    <h1>Edit Comedian</h1>
                </header>
                <section>
                    <form id="record-comic" onSubmit={this.handleEditComedian}>
                        <div class="form-section">
                            <label for="first_name">First Name</label>
                            <input type="text" name="first_name" defaultValue={this.context.comedians[index].first_name} required />
                        </div>
                        <div class="form-section">
                            <label for="last_name">Last Name</label>
                            <input type="text" name="last_name" defaultValue={this.context.comedians[index].last_name} required />
                        </div>
                        <div class="form-section">
                            <label for="comic-phone">Phone</label>
                            <input type="text" name="comic-phone" defaultValue={this.context.comedians[index].phone} required />
                        </div>
                        <div class="form-section">
                            <label for="comic-email">Email</label>
                            <input type="text" name="comic-email" defaultValue={this.context.comedians[index].email} required />
                        </div>
                        <div class="form-section">
                            <label for="bio-summary">Bio</label>
                            <textarea name="bio-summary" rows="5" defaultValue={this.context.comedians[index].bio} required />
                        </div>
                        <div class="form-section">
                            <label for="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10" defaultValue={this.context.comedians[index].notes} required></textarea>
                        </div>
                        <div className="form-section">
                        <label htmlFor="form-section">Category</label>
                            <select name="category" id="category">
                                <option value="open mic">Open Mic</option>
                                <option value="audition">Audition</option>
                                <option value="late show">Late Show</option>
                                <option value="showcase">Showcase</option>
                                <option value="host">Host</option>
                                <option value="feature">Feature</option>
                                <option value="headliner">Headliner</option>
                            </select>
                        </div>
                        <div className="form-section">
                        <label htmlFor="form-section">Gender</label>
                            <select name="gender" id="gender">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="age">Age</label>
                            <input type="number" name="age" placeholder="25" />
                        </div>
                        <div className="form-section">
                        <label htmlFor="race">Race</label>
                            <select name="race" id="race">
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="asian">Asian</option>
                                <option value="hispanic">Hispanic</option>
                                <option value="native american">Native American</option>
                                <option value="pacific islander">Pacific Islander</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <p>Passed vs. Not Passed</p>
                            <input type="radio" name="passed" value="0" className="passed"/>
                                <label htmlFor="passed">
                                    <span>Passed</span>
                                </label><br />
                            <input type="radio" name="not-passed" value="0" className="not-passed"/>
                                <label htmlFor="not-passed">
                                    <span>Not Passed</span>
                            </label><br />
                        </div>
                        <div className="form-section">
                            <p>Clean vs. Explicit</p>
                            <input type="radio" name="clean" value="1" />
                                <label htmlFor="clean">
                                    <span>Clean</span>
                                </label><br />
                            <input type="radio" name="clean" value="0" />
                                <label htmlFor="clean">
                                    <span>Explicit</span>
                            </label><br />
                        </div>
                        <br />
                        <div className="form-section">
                            <label htmlFor="ssn">SSN</label>
                            <input type="number" name="ssn" defaultValue={this.context.comedians[index].ssn} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="street">Street</label>
                            <input type="text" name="street" defaultValue={this.context.comedians[index].street} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="city">City</label>
                            <input type="text" name="city" defaultValue={this.context.comedians[index].city} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="State">State</label>
                            <input type="text" name="st" defaultValue={this.context.comedians[index].st} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="zip">Zipcode</label>
                            <input type="text" name="zip" defaultValue={this.context.comedians[index].zip} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="website">Website</label>
                            <input type="text" name="website" defaultValue={this.context.comedians[index].website} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="facebook">Facebook Handle</label>
                            <input type="text" name="facebook" defaultValue={this.context.comedians[index].facebook} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="twitter">Twitter Handle</label>
                            <input type="text" name="twitter" defaultValue={this.context.comedians[index].twitter} />
                        </div>
                        <div className="form-section">
                            <label htmlFor="instagram">Instagram Handle</label>
                            <input type="text" name="instagram" defaultValue={this.context.comedians[index].instagram} />
                        </div>
                    </form>
                </section>
            </div>
            </ApiContext.Consumer> 
        )
    }
}