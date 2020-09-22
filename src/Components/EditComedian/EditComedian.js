import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import TokenService from '../../token-service.js';
import './EditComedian.css';

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
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(modifiedComedian),
            })
        .then(res => {
            if (!res.ok) {
                res.json().then((res) => {
                    throw res
                })  
                console.log('error')
            }
        })
        .then((res) => {
            modifiedComedian.id = id;
            this.props.history.push(`/comedianList`);
        })
        .catch(error => {
            console.error({ error })
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
        const comedian = this.context.comedians.find((comedian) =>
            +comedian.id === +this.props.match.params.id)
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <form onSubmit={this.handleEditComedian} className="editComic">
                        <h1 className="editComedianHeader">Edit Comedian</h1>
                            <label htmlFor="first_name">First Name</label>
                            <input type="text" name="first_name" defaultValue={comedian.first_name} required />

                            <label htmlFor="last_name">Last Name</label>
                            <input type="text" name="last_name" defaultValue={comedian.last_name} required />
                    
                            <label htmlFor="comic-phone">Phone</label>
                            <input type="text" name="phone" defaultValue={comedian.phone} required />
                        
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" defaultValue={comedian.email} required />
                        
                            <label htmlFor="bio">Bio</label>
                            <textarea name="bio" rows="5" defaultValue={comedian.bio} required />
                    
                            <label htmlFor="notes">Notes</label>
                            <textarea name="notes" rows="10" defaultValue={comedian.notes} required></textarea>
                          
                            <label htmlFor="form-section">Category</label>
                                <select name="category" id="category" defaultValue={comedian.category}>
                                    <option value="open mic">Open Mic</option>
                                    <option value="audition">Audition</option>
                                    <option value="late show">Late Show</option>
                                    <option value="showcase">Showcase</option>
                                    <option value="host">Host</option>
                                    <option value="feature">Feature</option>
                                    <option value="headliner">Headliner</option>
                                </select>
                           
                            <label htmlFor="form-section">Gender</label>
                                <select name="gender" id="gender" defaultValue={comedian.gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                           
                                <label htmlFor="age">Age</label>
                                <input type="number" name="age" placeholder="25" defaultValue={comedian.age} />
                          
                            <label htmlFor="race">Race</label>
                                <select name="race" id="race" defaultValue={comedian.race}>
                                    <option value="white">White</option>
                                    <option value="black">Black</option>
                                    <option value="asian">Asian</option>
                                    <option value="hispanic">Hispanic</option>
                                    <option value="native american">Native American</option>
                                    <option value="pacific islander">Pacific Islander</option>
                                </select>

                                <label htmlFor="passed">Passed</label><br />
                                <input type="radio" name="passed" value="0" className="passed" defaultChecked={comedian.passed === true}/>
                                <label htmlFor="not-passed">Not Passed</label><br />
                                <input type="radio" name="passed" value="0" className="not-passed" defaultChecked={comedian.passed === false}/>

                                <label htmlFor="clean">Clean</label><br />
                                <input type="radio" name="clean" className="clean" value="1" defaultChecked={comedian.clean === true} />
                                <label htmlFor="explicit">Explicit</label><br />
                                <input type="radio" name="clean" className="explicit" value="0" defaultChecked={comedian.clean === false} />


                                <label htmlFor="ssn">SSN</label>
                                <input type="text" name="ssn" defaultValue={comedian.ssn} />
                           
                                <label htmlFor="street">Street</label>
                                <input type="text" name="street" defaultValue={comedian.street} />
                        
                                <label htmlFor="city">City</label>
                                <input type="text" name="city" defaultValue={comedian.city} />
                           
                                <label htmlFor="State">State</label>
                                <input type="text" name="st" defaultValue={comedian.st} />
                         
                                <label htmlFor="zip">Zipcode</label>
                                <input type="text" name="zip" defaultValue={comedian.zip} />
                           
                                <label htmlFor="website">Website</label>
                                <input type="text" name="website" defaultValue={comedian.website} />
                   
                                <label htmlFor="facebook">Facebook Handle</label>
                                <input type="text" name="facebook" defaultValue={comedian.facebook} />
                          
                                <label htmlFor="twitter">Twitter Handle</label>
                                <input type="text" name="twitter" defaultValue={comedian.twitter} />
                      
                                <label htmlFor="instagram">Instagram Handle</label>
                                <input type="text" name="instagram" defaultValue={comedian.instagram} />
                            <div className="editComedianControls">
                                <button type="reset">Reset</button>
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                )}
            </ApiContext.Consumer> 
        )
    }
}