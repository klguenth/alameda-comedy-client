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
        let id = this.props.match.params.id;
        let index = this.findById(id)
        let comedian = this.context.comedians[index];
        if (!this.context.comedians.length) {
            return <p>Loading...</p>;
        }
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div className="comedianDetail">
                        <section>
                            <form id="record-comic">
                                <div className="detail-section">
                                    <label htmlFor="firstName">Name:</label>
                                    <p>{defaultValue=this.context.comedians[index].first_name}{' '}{defaultValue=this.context.comedians[index].last_name} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comic-phone">Phone:</label>
                                    <p>{defaultValue=this.context.comedians[index].phone} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comic-email">Email:</label>
                                    <p>{defaultValue=this.context.comedians[index].email} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="bio-summary">Bio:</label>
                                    <p>{defaultValue=this.context.comedians[index].bio} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="note-summary">Notes:</label>
                                    <p>{defaultValue=this.context.comedians[index].notes} </p>
                                </div>
                                <div className="form-section">
                                <label htmlFor="form-section">Category</label>
                                    <p>{defaultValue=this.context.comedians[index].category}</p>
                                </div>
                                <div className="form-section">
                                <label htmlFor="form-section">Gender</label>
                                    <p>{defaultValue=this.context.comedians[index].gender}</p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="age">Age</label>
                                    <p>{defaultValue=this.context.comedians[index].age} </p>
                                </div>
                                <div className="form-section">
                                <label htmlFor="race">Race</label>
                                    <p>{defaultValue=this.context.comedians[index].race}</p>
                                </div>
                                <div className="form-section">
                                    <p>Passed vs. Not Passed</p>
                                    <input type="radio" name="passed" value="0" className="passed" defaultChecked={this.context.comedians[index].passed === true}/>
                                        <label htmlFor="passed">
                                            <span>Passed</span>
                                        </label><br />
                                    <input type="radio" name="not-passed" value="0" className="not-passed" defaultChecked={this.context.comedians[index].passed === false}/>
                                        <label htmlFor="not-passed">
                                            <span>Not Passed</span>
                                    </label><br />
                                </div>
                                <div className="form-section">
                                    <p>Clean vs. Explicit</p>
                                    <input type="radio" name="clean" className="clean" value="1" defaultChecked={this.context.comedians[index].clean === true} />
                                        <label htmlFor="clean">
                                            <span>Clean</span>
                                        </label><br />
                                    <input type="radio" name="explicit" className="explicit" value="0" defaultChecked={this.context.comedians[index].clean === false} />
                                        <label htmlFor="explicit">
                                            <span>Explicit</span>
                                    </label><br />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="ssn">SSN</label>
                                    <p>{defaultValue=this.context.comedians[index].ssn} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="street">Address</label>
                                    <p>{defaultValue=this.context.comedians[index].street} </p>
                                    <p>{defaultValue=this.context.comedians[index].city} </p>
                                    <p>{defaultValue=this.context.comedians[index].st} </p>
                                    <p>{defaultValue=this.context.comedians[index].zip} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="website">Website:</label>
                                    <p>{defaultValue=this.context.comedians[index].website} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="facebook">Facebook Handle:</label>
                                    <p>{defaultValue=this.context.comedians[index].facebook} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="twitter">Twitter Handle:</label>
                                    <p>{defaultValue=this.context.comedians[index].twitter} </p>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="instagram">Instagram Handle:</label>
                                    <p>{defaultValue=this.context.comedians[index].instagram} </p>
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