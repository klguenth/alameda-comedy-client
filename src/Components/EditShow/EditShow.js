import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './EditShow.css';

export default class EditShow extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         shows: this.props.shows
    //     }
    // }

    static defaultProps = {
        editShow: () => {},
        deleteShow: () => {},
        match: {
            params: {}
        },
    }
    static contextType = ApiContext;

//edit show in show list
    handleEditShow = event => {
        event.preventDefault()
        const id = this.props.match.params.id;
        const index = this.findById(parseInt(id));
        const showId = this.context.shows[index].id;
        const modifiedShow = {};
        modifiedShow.title = event.target.title.value;
        modifiedShow.show_date = event.target.show_date.value;
        modifiedShow.show_time = event.target.show_time.value;
        modifiedShow.comics = event.target.comics.value;
        modifiedShow.stage = event.target.stage.value;
        modifiedShow.details = event.target.details.value;
        modifiedShow.notes = event.target.notes.value;
        modifiedShow.price_premium = event.target.price_premium.value;
        modifiedShow.price_general = event.target.price_general.value;
        modifiedShow.capacity = event.target.capacity.value;
        modifiedShow.comps = event.target.comps.value;
        // modifiedShow.tix_id = event.target.tix_id.value;
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/show/${showId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedShow),
            })
        .then(res => {
            if (!res.ok) {
                console.log('error')
            return res.json();
            }
        })
        .then((res) => {
            modifiedShow.id = id;
            this.context.editShow(modifiedShow)
            this.props.history.push(`/showList`);
        })
        .catch(error => {
            console.error({ error })
        });
    }

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

    findById(id) {
        for (let i = 0; i<this.context.shows.length; i++) {
            if (parseInt(id) === this.context.shows[i].id) {
                return i;
            }
        }
    }

    render() {
        let id = this.props.match.params.id;
        let index = this.findById(id)
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                    <div>
                        <header>
                            <h1>Edit Show</h1>
                        </header>
                        <section className="record-show">
                            <form onSubmit={this.handleEditShow}>
                                <div className="form-section">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" defaultValue={this.context.shows[index].title} required />
                                </div>
                                {console.log(this.context.shows[index].title, 'title')}
                                <div className="form-section">
                                    <label htmlFor="show_date">Date</label>
                                    <input type="date" id="show_date" name="show_date" min="2020-04-25" max="2050-01-01"
                                        defaultValue={this.context.shows[index].show_date.slice(0, 10)} required/>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="show_time">Time</label>
                                    <input type="time" id="show_time" name="show_time" min="12:00" max="23:00" defaultValue={this.context.shows[index].show_time} required/>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comics">Comics</label>
                                    <input type="number" defaultValue={this.context.shows[index].comics} name="comics" id="comics"/>
                                </div>
                                <div className="form-section">
                                <label htmlFor="stage">Stage</label>
                                    <select name="stage" id="stage" defaultValue={this.context.shows[index].stage}>
                                        <option value="patio">patio</option>
                                        <option value="showroom">showroom</option>
                                    </select>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="details">Details</label>
                                    <input type="text" id="details" name="details" defaultValue={this.context.shows[index].details} required />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea name="notes" rows="10" id="notes" defaultValue={this.context.shows[index].notes} required></textarea>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="price_general">General Price</label>
                                    <input type="number" min="1" step="any" name="price_general" id="price_general"
                                        defaultValue={Number(this.context.shows[index].price_general.slice(1))} />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="price_premium">Premium Price</label>
                                    <input type="number" min="1" step="any" name="price_premium" id="price_premium"
                                        defaultValue={Number(this.context.shows[index].price_premium.slice(1))} />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="capacity">Capacity</label>
                                    <input type="number" min="1" step="any" name="capacity" id="capacity" defaultValue={this.context.shows[index].capacity} />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comps">Comps</label>
                                    <input type="number" min="1" step="any" name="comps" id="comps" defaultValue={this.context.shows[index].comps} />
                                </div>
                                <button type="reset">Reset</button>
                                <button type="submit">Submit</button>
                                <button type="delete" onClick={this.handleDeleteShow}>Delete</button>
                            </form>
                        </section>
                    </div>
                )}
            </ApiContext.Consumer>
        );
    }
}