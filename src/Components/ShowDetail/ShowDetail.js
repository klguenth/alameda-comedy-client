import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import { Link } from 'react-router-dom';
import './ShowDetail.css';

export default class ShowDetail extends React.Component {

    static defaultProps = {
        onDeleteShow: () => {},
        match: {
            params: {}
        }
    }
    static contextType = ApiContext;

    //delete show from show list
    handleDeleteShow = e => {
        e.preventDefault()
        const showId = this.props.match.params.id;
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/show/${showId}`, {
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
            this.context.deleteShow(showId);
            this.props.history.push('/showList')
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const show = this.context.shows.find((show) => 
        +show.id == +this.props.match.params.id)
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div className="show">
                    <section className="record-show">
                        <form id="record-show">
                            <div className="form-section">
                                <label htmlFor="title">Title</label>
                                <p>{defaultValue=show.title}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="show_date">Date</label>
                                <p>{defaultValue=show.show_date}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="show_time">Time</label>
                                <p>{defaultValue=show.show_time}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="comics">Comics</label>
                                <p>{defaultValue=show.comics}</p>
                            </div>
                            {/* TODO defaultvalue for select option */}
                            <div className="form-section">
                            <label htmlFor="stage">Stage</label>
                                <select name="stage" id="stage">
                                    <option value="patio">patio</option>
                                    <option value="showroom">showroom</option>
                                </select>
                            </div>
                            <div className="form-section">
                                <label htmlFor="details">Details</label>
                                <p>{defaultValue=show.details}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="notes">Notes</label>
                                <p>{defaultValue=show.notes}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="price_general">General Price</label>
                                <p>{defaultValue=show.price_general}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="price_premium">Premium Price</label>
                                <p>{defaultValue=show.price_premium}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="capacity">Capacity</label>
                                <p>{defaultValue=show.capacity}</p>
                            </div>
                            <div className="form-section">
                                <label htmlFor="comps">Comps</label>
                                <p>{defaultValue=show.comps}</p>
                            </div>
                    <header>
                        <h1>Lineup</h1>
                    </header>
                            <div className="form-section">
                                <label htmlFor="comic-name">1. Comic Name</label>
                                <input type="text" name="show-name" placeholder="Comic Name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="comic-name">2. Comic Name</label>
                                <input type="text" name="show-name" placeholder="Comic Name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="comic-name">3. Comic Name</label>
                                <input type="text" name="show-name" placeholder="Comic Name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="comic-name">4. Comic Name</label>
                                <input type="text" name="show-name" placeholder="Comic Name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="comic-name">5. Comic Name</label>
                                <input type="text" name="show-name" placeholder="Comic Name" required />
                            </div>
                            <div className="form-section">
                                <label htmlFor="comic-name">6. Comic Name</label>
                                <input type="text" name="show-name" placeholder="Comic Name" required />
                            </div>
                            <button><Link to={`/editShow/${show.id}`} className='editButton' aria-label='edit button'>Edit</Link></button>
                            <button type="delete" onClick={this.handleDeleteShow}>Delete</button>
                        </form>
                    </section> 
                    </div>
                )}
            </ApiContext.Consumer>
        )
    }
}