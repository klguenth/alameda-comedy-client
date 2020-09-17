import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import { Link } from 'react-router-dom';
import TokenService from '../../token-service.js';
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
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then( res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res;
        })
        .then(() => {
            this.props.history.push('/comedianList')
        })
        .catch(error => {
            console.error({ error })
        })
    }
    findById(id) {
        for (let i = 0; i < this.context.comedians.length; i++) {
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
                    <div className="comedianDetail">
                        <section>
                            <form className="record-comic">
                                <header>
                                    <h2 className="comedianHeader">
                                    {defaultValue=comedian.first_name}{' '}{defaultValue=comedian.last_name}
                                    </h2>
                                </header>
                                <div className="comic-detail-section">
                                    <label htmlFor="name">Name:</label>
                                    <span>{defaultValue=comedian.first_name}{' '}{defaultValue=comedian.last_name} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="comic-phone">Phone:</label>
                                    <span>{defaultValue=comedian.phone} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="comic-email">Email:</label>
                                    <span>{defaultValue=comedian.email} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="bio-summary">Bio:</label>
                                    <span>{defaultValue=comedian.bio} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="note-summary">Notes:</label>
                                    <span>{defaultValue=comedian.notes} </span>
                                </div>
                                <div className="comic-detail-section">
                                <label htmlFor="form-section">Category: </label>
                                    <span>{defaultValue=comedian.category}</span>
                                </div>
                                <div className="comic-detail-section">
                                <label htmlFor="form-section">Gender: </label>
                                    <span>{defaultValue=comedian.gender}</span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="age">Age: </label>
                                    <span>{defaultValue=comedian.age} </span>
                                </div>
                                <div className="comic-detail-section">
                                <label htmlFor="race">Race: </label>
                                    <span>{defaultValue=comedian.race}</span>
                                </div>
                                <div className="comic-detail-section">
                                    <span>Passed vs. Not Passed</span>
                                    <input type="radio" name="passed" value="0" className="passed" defaultChecked={comedian.passed === true}/>
                                        <label htmlFor="passed">
                                            <span>Passed</span>
                                        </label><br />
                                    <input type="radio" name="not-passed" value="0" className="not-passed" defaultChecked={comedian.passed === false}/>
                                        <label htmlFor="not-passed">
                                            <span>Not Passed</span>
                                    </label><br />
                                </div>
                                <div className="comic-detail-section">
                                    <span>Clean vs. Explicit</span>
                                    <input type="radio" name="clean" className="clean" value="1" defaultChecked={comedian.clean === true} />
                                        <label htmlFor="clean">
                                            <span>Clean</span>
                                        </label><br />
                                    <input type="radio" name="explicit" className="explicit" value="0" defaultChecked={comedian.clean === false} />
                                        <label htmlFor="explicit">
                                            <span>Explicit</span>
                                    </label><br />
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="ssn">SSN: </label>
                                    <span>{defaultValue=comedian.ssn}</span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="street">Address: </label>
                                    <span>{defaultValue=comedian.street} </span>
                                    <span>{defaultValue=comedian.city} </span>
                                    <span>{defaultValue=comedian.st} </span>
                                    <span>{defaultValue=comedian.zip} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="website">Website:</label>
                                    <span>{defaultValue=comedian.website} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="facebook">Facebook Handle:</label>
                                    <span>{defaultValue=comedian.facebook} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="twitter">Twitter Handle:</label>
                                    <span>{defaultValue=comedian.twitter} </span>
                                </div>
                                <div className="comic-detail-section">
                                    <label htmlFor="instagram">Instagram Handle:</label>
                                    <span>{defaultValue=comedian.instagram} </span>
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