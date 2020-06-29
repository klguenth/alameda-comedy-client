import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import { Link } from 'react-router-dom';
import './ComedianDetail.css';

export default class ComedianDetail extends React.Component {

    static defaultProps = {
        onDeleteComedian: () => {},
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    //delete comedian from comedian list
    handleDeleteComedian = e => {
        e.preventDefault()
        const comedianId = this.props.match.params.id;
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/comedian/${comedianId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then( res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res;
        })
        .then(() => {
            this.context.deleteComedian(comedianId);
            this.props.history.push('/comedianList')
        })
        .catch(error => {
            console.error({ error })
        })
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
        +comedian.id == +this.props.match.params.id)
        // let id = this.props.match.params.id;
        // let index = this.findById(id)
        // let comedian = this.context.comedians[index];
        // if (!this.context.comedians.length) {
        //     return <p>Loading...</p>;
        // }
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div className="comedianDetail">
                        <section>
                            <form id="record-comic">
                                <div className="detail-section">
                                    <label htmlFor="firstName">Name:</label>
                                    <p>{defaultValue=comedian.first_name}{' '}{defaultValue=comedian.last_name} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comic-phone">Phone:</label>
                                    <p>{defaultValue=comedian.phone} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comic-email">Email:</label>
                                    <p>{defaultValue=comedian.email} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="bio-summary">Bio:</label>
                                    <p>{defaultValue=comedian.bio} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="note-summary">Notes:</label>
                                    <p>{defaultValue=comedian.notes} </p>
                                </div>
                                <div className="form-section">
                                <label htmlFor="form-section">Category</label>
                                    <p>{defaultValue=comedian.category}</p>
                                </div>
                                <div className="form-section">
                                <label htmlFor="form-section">Gender</label>
                                    <p>{defaultValue=comedian.gender}</p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="age">Age</label>
                                    <p>{defaultValue=comedian.age} </p>
                                </div>
                                <div className="form-section">
                                <label htmlFor="race">Race</label>
                                    <p>{defaultValue=comedian.race}</p>
                                </div>
                                <div className="form-section">
                                    <p>Passed vs. Not Passed</p>
                                    <input type="radio" name="passed" value="0" className="passed" defaultChecked={comedian.passed === true}/>
                                        <label htmlFor="passed">
                                            <span>Passed</span>
                                        </label><br />
                                    <input type="radio" name="not-passed" value="0" className="not-passed" defaultChecked={comedian.passed === false}/>
                                        <label htmlFor="not-passed">
                                            <span>Not Passed</span>
                                    </label><br />
                                </div>
                                <div className="form-section">
                                    <p>Clean vs. Explicit</p>
                                    <input type="radio" name="clean" className="clean" value="1" defaultChecked={comedian.clean === true} />
                                        <label htmlFor="clean">
                                            <span>Clean</span>
                                        </label><br />
                                    <input type="radio" name="explicit" className="explicit" value="0" defaultChecked={comedian.clean === false} />
                                        <label htmlFor="explicit">
                                            <span>Explicit</span>
                                    </label><br />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="ssn">SSN</label>
                                    <p>{defaultValue=comedian.ssn} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="street">Address</label>
                                    <p>{defaultValue=comedian.street} </p>
                                    <p>{defaultValue=comedian.city} </p>
                                    <p>{defaultValue=comedian.st} </p>
                                    <p>{defaultValue=comedian.zip} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="website">Website:</label>
                                    <p>{defaultValue=comedian.website} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="facebook">Facebook Handle:</label>
                                    <p>{defaultValue=comedian.facebook} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="twitter">Twitter Handle:</label>
                                    <p>{defaultValue=comedian.twitter} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="instagram">Instagram Handle:</label>
                                    <p>{defaultValue=comedian.instagram} </p>
                                </div>
                                <button><Link to={`/editComedian/${comedian.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
                                <button type="delete" onClick={this.handleDeleteComedian}>Delete</button>
                            </form>
                        </section>
                    </div>
                )}
            </ApiContext.Consumer>
        )
    }
}