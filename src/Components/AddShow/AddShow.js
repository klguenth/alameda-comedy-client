import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './AddShow.css';

export default class AddShow extends React.Component {

    static defaultProprs = {
        addShow: () => {},
    }
    static contextType = ApiContext;

//add show to show list
    handleAddShow = event => {
        event.preventDefault()
        const newShow = {};
        newShow.title = event.target.title.value;
        newShow.show_date = event.target.show_date.value;
        newShow.show_time = event.target.show_time.value;
        newShow.comics = event.target.comics.value;
        newShow.stage = event.target.state.value;
        newShow.details = event.target.details.value;
        newShow.notes = event.target.notes.value;
        newShow.generalPrice = event.target.generalPrice.value;
        newShow.premiumPrice = event.target.premiumPrice.value;
        newShow.capacity = event.target.capacity.value;
        newShow.comps = event.target.comps.value;

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/show`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newShow)
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then((res) => {
            this.props.history.push(`/showList`)
            window.location.reload()
        })
        .catch(error => {
            console.error({ error })
        });
    }

    render() {
        return (
            <div>
                <header>
                    <h1>New Show</h1>
                </header>
                <section className="record-show">
                    <form onSubmit={this.handleAddShow}>
                        <div className="form-section">
                            <label htmlFor="show-name">Title</label>
                            <input type="text" name="show-name" placeholder="Amateur Night" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="show-date" min="2020-04-25" max="2050-01-01" required/>
                        </div>
                        <div className="form-section">
                            <label htmlFor="time">Time</label>
                            <input type="time" id="default-picker" className="time-picker" min="12:00" max="23:00" placeholder="Select time" required/>
                        </div>
                        <div className="form-section">
                            <label htmlFor="comics">Comics</label>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="form-section">
                        <label htmlFor="form-section">Stage</label>
                            <select name="stage" id="stage">
                                <option value="Patio">Patio</option>
                                <option value="Showroom">Showroom</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="detail-summary">Details</label>
                            <input type="text" name="detail-summary" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10" required></textarea>
                        </div>
                        <div className="form-section">
                            <label htmlFor="general-price">General Price</label>
                            <input type="number" min="1" step="any" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="premium-price">Premium Price</label>
                            <input type="number" min="1" step="any" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="capacity">Capacity</label>
                            <input type="number" min="1" step="any" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comps">Comps</label>
                            <input type="number" min="1" step="any" />
                        </div>
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </form>
                </section>
                <header>
                    <h1>Lineup</h1>
                </header>
                <section className="record-show">
                    <form>
                        <div className="form-section">
                            <label htmlFor="comic-name">Comic Name</label>
                            <input type="text" name="show-name" placeholder="Comic Name" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-name">Comic Name</label>
                            <input type="text" name="show-name" placeholder="Comic Name" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-name">Comic Name</label>
                            <input type="text" name="show-name" placeholder="Comic Name" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-name">Comic Name</label>
                            <input type="text" name="show-name" placeholder="Comic Name" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-name">Comic Name</label>
                            <input type="text" name="show-name" placeholder="Comic Name" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comic-name">Comic Name</label>
                            <input type="text" name="show-name" placeholder="Comic Name" required />
                        </div>
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </form>
                </section> 
                <header>
                    <h1>Comic Search</h1>
                </header>
                <section className="record-show">
                    <form>
                        <input type="text" placeholder="Search.." name="search" />
                        <button type="submit">Submit</button>
                    </form>
                </section> 
            </div>
        )
    }
}