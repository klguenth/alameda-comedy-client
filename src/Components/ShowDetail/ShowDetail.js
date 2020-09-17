import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import { Link } from 'react-router-dom';
import TokenService from '../../token-service.js';
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
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res;
        })
        .then(() => {
            this.props.history.push('/showList')
        })
        .catch(error => {
            console.error({ error })
        })
    }

    render() {
        const show = this.context.shows.find((show) => 
            +show.id === +this.props.match.params.id)
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div>
                    <section className="showDetail">
                        <form>
                            <h1 className="show-detail-section">Show Details</h1>
                            <div className="show-detail-section">
                                <label htmlFor="title">Title:</label>
                                <span>{defaultValue=show.title}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="show_date">Date:</label>
                                <span>{defaultValue=show.show_date.slice(0, 10)}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="show_time">Time:</label>
                                <span>{defaultValue=show.show_time}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comics">Comics:</label>
                                <span>{defaultValue=show.comics}</span>
                            </div>
                            <div className="show-detail-section">
                            <label htmlFor="stage">Stage:</label>
                                <select name="stage">
                                    <option value="patio">patio</option>
                                    <option value="showroom">showroom</option>
                                </select>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="details">Details:</label>
                                <span>{defaultValue=show.details}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="notes">Notes:</label>
                                <span>{defaultValue=show.notes}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="price_general">General Price:</label>
                                <span>{defaultValue=show.price_general}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="price_premium">Premium Price:</label>
                                <span>{defaultValue=show.price_premium}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="capacity">Capacity:</label>
                                <span>{defaultValue=show.capacity}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comps">Comps:</label>
                                <span>{defaultValue=show.comps}</span>
                            </div>
                            <header>
                                <h1  className="show-detail-section">Lineup</h1>
                            </header>
                            <div className="show-detail-section">
                                <label htmlFor="comic-name">1. Comic Name</label>
                                <span>{defaultValue=show.comic_one}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comic-name">2. Comic Name</label>
                                <span>{defaultValue=show.comic_two}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comic-name">3. Comic Name</label>
                                <span>{defaultValue=show.comic_three}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comic-name">4. Comic Name</label>
                                <span>{defaultValue=show.comic_four}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comic-name">5. Comic Name</label>
                                <span>{defaultValue=show.comic_five}</span>
                            </div>
                            <div className="show-detail-section">
                                <label htmlFor="comic-name">6. Comic Name</label>
                                <span>{defaultValue=show.comic_six}</span>
                            </div>
                            <div className="showDetailButton">
                                <button><Link to={`/editShow/${show.id}`} className="editButton" aria-label="edit button">Edit</Link></button>
                                <button type="delete" onClick={this.handleDeleteShow} className="deleteButton" aria-label="delete button">Delete</button>
                            </div>
                        </form>
                    </section> 
                    </div>
                )}
            </ApiContext.Consumer>
        )
    }
}