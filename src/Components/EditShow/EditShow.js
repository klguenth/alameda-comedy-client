import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './EditShow.css';

export default class EditShow extends React.Component {


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
        modifiedShow.comic_one = event.target.comic_one;
        modifiedShow.comic_two = event.target.comic_two;
        modifiedShow.comic_three = event.target.comic_three;
        modifiedShow.comic_four = event.target.comic_four;
        modifiedShow.comic_five = event.target.comic_five;
        modifiedShow.comic_six = event.target.comic_six;
        // modifiedShow.tix_id = event.target.tix_id.value;
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/show/${showId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(modifiedShow),
        })
        .then(res => {
            if ((!res.ok)) {
                res.json().then((res) => {
                    throw res
                })
                console.log('error')
            }
        })
        .then((res) => {
            console.log('res', res);
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
        // const show = this.context.shows.find(
        //     // converts both sides to integers
        //     show => +show.id === +this.props.match.params.id
        // );

        //  Technically the better way would be to have a marker called isFetching 
        // and display the appropriate content based on it because if there were legitimately no shows, the user would just have a blank screen.
        // if (this.context.shows.length === 0) {
        //     return null;
        // }
        const show = this.context.shows.find((show) => 
            +show.id == +this.props.match.params.id)
        return (
        // let id = this.props.match.params.id;
        // let index = this.findById(id)

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
                                    <input type="text" id="title" name="title" defaultValue={show.title} required />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="show_date">Date</label>
                                    <input type="date" id="show_date" name="show_date" min="2020-04-25" max="2050-01-01"
                                        defaultValue={show.show_date.slice(0, 10)} required/>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="show_time">Time</label>
                                    <input type="time" id="show_time" name="show_time" min="12:00" max="23:00" defaultValue={show.show_time} required/>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comics">Comics</label>
                                    <input type="number" defaultValue={show.comics} name="comics" id="comics"/>
                                </div>
                                <div className="form-section">
                                <label htmlFor="stage">Stage</label>
                                    <select name="stage" id="stage" defaultValue={show.stage}>
                                        <option value="patio">patio</option>
                                        <option value="showroom">showroom</option>
                                    </select>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="details">Details</label>
                                    <input type="text" id="details" name="details" defaultValue={show.details} required />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="notes">Notes</label>
                                    <textarea name="notes" rows="10" id="notes" defaultValue={show.notes} required></textarea>
                                </div>
                                <div className="form-section">
                                    <label htmlFor="price_general">General Price</label>
                                    <input type="number" min="1" step="any" name="price_general" id="price_general"
                                        defaultValue={Number(show.price_general.slice(1))} />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="price_premium">Premium Price</label>
                                    <input type="number" min="1" step="any" name="price_premium" id="price_premium"
                                        defaultValue={Number(show.price_premium.slice(1))} />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="capacity">Capacity</label>
                                    <input type="number" min="1" step="any" name="capacity" id="capacity" defaultValue={show.capacity} />
                                </div>
                                <div className="form-section">
                                    <label htmlFor="comps">Comps</label>
                                    <input type="number" min="1" step="any" name="comps" id="comps" defaultValue={show.comps} />
                                </div>
                                <header>
                                    <h1>Lineup</h1>
                                </header>
                                    <div className="form-section">
                                        <label htmlFor="comic_one">1. Comic Name</label>
                                        <input type="text" name="comic_one" defaultValue={show.comic_one} required />
                                    </div>
                                    <div className="form-section">
                                        <label htmlFor="comic_two">2. Comic Name</label>
                                        <input type="text" name="comic_two" defaultValue={show.comic_two} required />
                                    </div>
                                    <div className="form-section">
                                        <label htmlFor="comic_three">3. Comic Name</label>
                                        <input type="text" name="comic_three" defaultValue={show.comic_three} required />
                                    </div>
                                    <div className="form-section">
                                        <label htmlFor="comic_four">4. Comic Name</label>
                                        <input type="text" name="comic_four" defaultValue={show.comic_four} required />
                                    </div>
                                    <div className="form-section">
                                        <label htmlFor="comic_five">5. Comic Name</label>
                                        <input type="text" name="comic_five" defaultValue={show.comic_five} required />
                                    </div>
                                    <div className="form-section">
                                        <label htmlFor="comic_six">6. Comic Name</label>
                                        <input type="text" name="comic_six" defaultValue={show.comic_six} required />
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