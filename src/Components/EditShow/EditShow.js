import React from 'react';
import config from '../../config.js';
import ApiContext from '../../ApiContext.js';
import './EditShow.css';
import TokenService from '../../token-service.js';

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
        modifiedShow.comic_one = event.target.comic_one.value;
        modifiedShow.comic_two = event.target.comic_two.value;
        modifiedShow.comic_three = event.target.comic_three.value;
        modifiedShow.comic_four = event.target.comic_four.value;
        modifiedShow.comic_five = event.target.comic_five.value;
        modifiedShow.comic_six = event.target.comic_six.value;
        fetch(`${config.REACT_APP_API_ENDPOINT}/api/show/${showId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify(modifiedShow),
        })
        .then(res => {
            if (!res.ok) {
                res.json().then((res) => {
                    throw res
                })
                console.log('error')
            }
        })
        .then((res) => {
            modifiedShow.id = id;
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
                'content-type': 'application/json',
                'authorization': `Bearer ${TokenService.getAuthToken()}`
            },
        })
        .then( res => {
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

    findById(id) {
        for (let i = 0; i<this.context.shows.length; i++) {
            if (parseInt(id) === this.context.shows[i].id) {
                return i;
            }
        }
    }

    render() {
        const show = this.context.shows.find((show) => 
            +show.id === +this.props.match.params.id)
        return (
            <ApiContext.Consumer>
                {defaultValue => (
                            <form onSubmit={this.handleEditShow} className="record-show-main">
                                <h1 className="editHeader">Edit Show</h1>
                                    <label htmlFor="title">Title</label>
                                    <input type="text" id="title" name="title" defaultValue={show.title} required />
   
                                    <label htmlFor="show_date">Date</label>
                                    <input type="date" id="show_date" name="show_date" min="2020-04-25" max="2050-01-01"
                                        defaultValue={show.show_date.slice(0, 10)} required/>

                                    <label htmlFor="show_time">Time</label>
                                    <input type="time" id="show_time" name="show_time" min="12:00" max="23:00" defaultValue={show.show_time} required/>
      
                                    <label htmlFor="comics">Comics</label>
                                    <input type="number" defaultValue={show.comics} name="comics" id="comics"/>
                          
                                    <label htmlFor="stage">Stage</label>
                                        <select name="stage" id="stage" defaultValue={show.stage}>
                                            <option value="patio">patio</option>
                                            <option value="showroom">showroom</option>
                                        </select>
                       
                                    <label htmlFor="details">Details</label>
                                    <input type="text" id="details" name="details" defaultValue={show.details} required />
   
                                    <label htmlFor="notes">Notes</label>
                                    <textarea name="notes" rows="10" id="notes" defaultValue={show.notes} required></textarea>

                                    <label htmlFor="price_general">General Price</label>
                                    <input type="number" min="1" step="any" name="price_general" id="price_general"
                                        defaultValue={Number(show.price_general.slice(1))} />
                         
                                    <label htmlFor="price_premium">Premium Price</label>
                                    <input type="number" min="1" step="any" name="price_premium" id="price_premium"
                                        defaultValue={Number(show.price_premium.slice(1))} />
                            
                                    <label htmlFor="capacity">Capacity</label>
                                    <input type="number" min="1" step="any" name="capacity" id="capacity" defaultValue={show.capacity} />
                            
                                    <label htmlFor="comps">Comps</label>
                                    <input type="number" min="1" step="any" name="comps" id="comps" defaultValue={show.comps} />
  
                                    <h1 className="editHeader">Lineup</h1>
   
                                        <label htmlFor="comic_one">1. Comic Name</label>
                                        <input type="text" name="comic_one" defaultValue={show.comic_one} />
                
                                        <label htmlFor="comic_two">2. Comic Name</label>
                                        <input type="text" name="comic_two" defaultValue={show.comic_two} />
                                  
                                        <label htmlFor="comic_three">3. Comic Name</label>
                                        <input type="text" name="comic_three" defaultValue={show.comic_three} />
         
                                        <label htmlFor="comic_four">4. Comic Name</label>
                                        <input type="text" name="comic_four" defaultValue={show.comic_four} />
                              
                                        <label htmlFor="comic_five">5. Comic Name</label>
                                        <input type="text" name="comic_five" defaultValue={show.comic_five} />
                               
                                        <label htmlFor="comic_six">6. Comic Name</label>
                                        <input type="text" name="comic_six" defaultValue={show.comic_six} />
                              
                                    <div className="editShowControls">
                                        <button type="reset">Reset</button>
                                        <button type="submit">Submit</button>
                                        <button type="delete" onClick={this.handleDeleteShow}>Delete</button>
                                    </div>
                            </form>
                )}
            </ApiContext.Consumer>
        );
    }
}