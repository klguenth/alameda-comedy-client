import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './AddComedian.css';
import TokenService from '../../token-service.js';

export default class AddComedian extends React.Component {

    static defaultProps = {
        addComedian: () => {},
    }
    static contextType = ApiContext;

//add comedian to comedian list
    handleAddComedian = event => {
        event.preventDefault()
        const newComedian = {};
        newComedian.first_name = event.target.first_name.value;
        newComedian.last_name = event.target.last_name.value;
        newComedian.phone = event.target.phone.value;
        newComedian.email = event.target.email.value;
        newComedian.bio = event.target.bio.value;
        newComedian.notes = event.target.notes.value;
        newComedian.category = event.target.category.value;
        newComedian.age = event.target.age.value;
        newComedian.race = event.target.race.value;
        newComedian.passed = event.target.passed.value;
        newComedian.clean = event.target.clean.value;
        newComedian.ssn = event.target.ssn.value;
        newComedian.street = event.target.street.value;
        newComedian.city = event.target.city.value;
        newComedian.st = event.target.st.value;
        newComedian.zip = event.target.zip.value;
        newComedian.website = event.target.website.value;
        newComedian.facebook = event.target.facebook.value;
        newComedian.twitter = event.target.twitter.value;
        newComedian.instagram = event.target.instagram.value;

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/comedian`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
          },
        body: JSON.stringify(newComedian)
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then((res) => {
            this.props.history.push(`/comedianList`)
        })
        .catch(error => {
            console.error({ error })
        });
    }
    render() {
        return (
            <form onSubmit={this.handleAddComedian} className="new-comic">
                <h1>New Comedian</h1>
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" placeholder="John" required />

                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" placeholder="Smith" required />

                    <label htmlFor="phone">Phone</label>
                    <input type="text" name="phone" placeholder="123-456-7890" required />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="email@gmail.com" required />

                    <label htmlFor="bio">Bio</label>
                    <textarea name="bio" rows="5" required />

                    <label htmlFor="notes">Notes</label>
                    <textarea name="notes" rows="10" required></textarea>

                    <label htmlFor="addComicSection">Category</label>
                    <select name="category" id="category">
                        <option value="open mic">Open Mic</option>
                        <option value="audition">Audition</option>
                        <option value="late show">Late Show</option>
                        <option value="showcase">Showcase</option>
                        <option value="host">Host</option>
                        <option value="feature">Feature</option>
                        <option value="headliner">Headliner</option>
                    </select>

                    <label htmlFor="addComicSection">Gender</label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>

                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" placeholder="25" />

                    <label htmlFor="race">Race</label>
                    <select name="race" id="race">
                        <option value="white">White</option>
                        <option value="black">Black</option>
                        <option value="asian">Asian</option>
                        <option value="hispanic">Hispanic</option>
                        <option value="native american">Native American</option>
                        <option value="pacific islander">Pacific Islander</option>
                    </select>

                    <label htmlFor="passed">Passed</label>
                    <input type="radio" name="passed" value="1" id="passed" />
                    <label htmlFor="not-passed">Not Passed</label>
                    <input type="radio" name="not-passed" value="0" id="not-passed"/>

                    <label htmlFor="clean">Clean</label><br />
                    <input type="radio" name="clean" value="1" />
                    <label htmlFor="clean">Explicit</label><br />
                    <input type="radio" name="clean" value="0" />

                    <label htmlFor="ssn">SSN</label>
                    <input type="number" name="ssn" placeholder="123-45-6789" />

                    <label htmlFor="street">Street</label>
                    <input type="text" name="street" placeholder="123 Main Street" />

                    <label htmlFor="city">City</label>
                    <input type="text" name="city" placeholder="Alameda" />

                    <label htmlFor="State">State</label>
                    <input type="text" name="st" placeholder="CA" />

                    <label htmlFor="zip">Zipcode</label>
                    <input type="text" name="zip" placeholder="94501" />

                    <label htmlFor="website">Website</label>
                    <input type="text" name="website" placeholder="www.alamedacomedy.com" />

                    <label htmlFor="facebook">Facebook Handle</label>
                    <input type="text" name="facebook" placeholder="JohnSmithComedy" />

                    <label htmlFor="twitter">Twitter Handle</label>
                    <input type="text" name="twitter" placeholder="@johnsmithcomedy" />

                    <label htmlFor="instagram">Instagram Handle</label>
                    <input type="text" name="instagram" placeholder="@johnsmithcomedy" />
                <div className="addComicControls">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>

            </form>
        )
    }
}