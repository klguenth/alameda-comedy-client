import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './AddShow.css';

export default class AddShow extends React.Component {

    static defaultProps = {
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
        newShow.stage = event.target.stage.value;
        newShow.details = event.target.details.value;
        newShow.notes = event.target.notes.value;
        newShow.price_general = event.target.price_general.value;
        newShow.price_premium = event.target.price_premium.value;
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
            <div className="show">
                <header>
                    <h1>New Show</h1>
                </header>
                <section className="record-show">
                    <form onSubmit={this.handleAddShow}>
                        <div className="form-section">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" placeholder="Amateur Night" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="show_date">Date</label>
                            <input type="date" id="date" name="show_date" min="2020-04-25" max="2050-01-01" required/>
                        </div>
                        <div className="form-section">
                            <label htmlFor="show_time">Time</label>
                            <input type="time" id="show_time" name="show_time" min="12:00" max="23:00" placeholder="Select time" required/>
                        </div>
                        <div className="form-section">
                            <label htmlFor="comics">Comics</label>
                            <input type="number" placeholder="Search" name="comics" id="comics"/>
                        </div>
                        <div className="form-section">
                        <label htmlFor="stage">Stage</label>
                            <select name="stage" id="stage">
                                <option value="patio">patio</option>
                                <option value="showroom">showroom</option>
                            </select>
                        </div>
                        <div className="form-section">
                            <label htmlFor="details">Details</label>
                            <input type="text" id="details" name="details" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="notes">Notes</label>
                            <textarea name="notes" rows="10" id="notes" required></textarea>
                        </div>
                        <div className="form-section">
                            <label htmlFor="price_general">General Price</label>
                            <input type="number" min="1" step="any" name="price_general" id="price_general" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="price_premium">Premium Price</label>
                            <input type="number" min="1" step="any" name="price_premium" id="price_premium" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="capacity">Capacity</label>
                            <input type="number" min="1" step="any" name="capacity" id="capacity" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="comps">Comps</label>
                            <input type="number" min="1" step="any" name="comps" id="comps" />
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
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </form>
                </section> 
            </div>
        )
    }
}