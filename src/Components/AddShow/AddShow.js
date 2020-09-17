import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './AddShow.css';
import TokenService from '../../token-service.js';

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
        newShow.comics = event.target.comics.value || 0;
        newShow.stage = event.target.stage.value;
        newShow.details = event.target.details.value;
        newShow.notes = event.target.notes.value;
        newShow.price_general = event.target.price_general.value || 0;
        newShow.price_premium = event.target.price_premium.value || 0;
        newShow.capacity = event.target.capacity.value || 0;
        newShow.comps = event.target.comps.value || 0;
        newShow.comic_one = event.target.comic_one.value;
        newShow.comic_two = event.target.comic_two.value;
        newShow.comic_three = event.target.comic_three.value;
        newShow.comic_four = event.target.comic_four.value;
        newShow.comic_five = event.target.comic_five.value;
        newShow.comic_six = event.target.comic_six.value;

    fetch(`${config.REACT_APP_API_ENDPOINT}/api/show`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'authorization': `Bearer ${TokenService.getAuthToken()}`,
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
        })
        .catch(error => {
            console.error({ error })
        });
    }

    render() {
        return (
            <form onSubmit={this.handleAddShow} className="new-show">
                <h1>New Show</h1>
                    <label htmlFor="title">Title: </label>
                    <input type="text" id="title" name="title" placeholder="Amateur Night" required />
                    <label htmlFor="show_date">Date: </label>
                    <input type="date" id="date" name="show_date" min="2020-04-25" max="2050-01-01" required/>

                    <label htmlFor="show_time">Time: </label>
                    <input type="time" id="show_time" name="show_time" min="12:00" max="23:00" placeholder="Select time" required/>


                    <label htmlFor="comics">Comics: </label>
                    <input type="number" placeholder="0" name="comics" id="comics"/>


                    <label htmlFor="stage">Stage: </label>
                    <select name="stage" id="stage">
                        <option value="patio">patio</option>
                        <option value="showroom">showroom</option>
                    </select>


                    <label htmlFor="details">Details: </label>
                    <input type="text" id="details" name="details" required />


                    <label htmlFor="notes">Notes: </label>
                    <textarea name="notes" rows="10" id="notes" required></textarea>


                    <label htmlFor="price_general">General Price: </label>
                    <input type="number" min="1" step="any" name="price_general" id="price_general" />


                    <label htmlFor="price_premium">Premium Price: </label>
                    <input type="number" min="1" step="any" name="price_premium" id="price_premium" />


                    <label htmlFor="capacity">Capacity: </label>
                    <input type="number" min="1" step="any" name="capacity" id="capacity" />


                    <label htmlFor="comps">Comps: </label>
                    <input type="number" min="1" step="any" name="comps" id="comps" />

                <h1 className="newShowSection">Lineup</h1>

                    <label htmlFor="comic_one">1. Comic Name: </label>
                    <input type="text" name="comic_one" placeholder="Name" />


                    <label htmlFor="comic_two">2. Comic Name: </label>
                    <input type="text" name="comic_two" placeholder="Name" />


                    <label htmlFor="comic_three">3. Comic Name: </label>
                    <input type="text" name="comic_three" placeholder="Name" />


                    <label htmlFor="comic_four">4. Comic Name: </label>
                    <input type="text" name="comic_four" placeholder="Name" />


                    <label htmlFor="comic_five">5. Comic Name: </label>
                    <input type="text" name="comic_five" placeholder="Name" />


                    <label htmlFor="comic_six">6. Comic Name: </label>
                    <input type="text" name="comic_six" placeholder="Name" />

                <div className="addShowControls">
                    <button type="reset">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}