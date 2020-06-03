import React from 'react';
import './AddShow.css';

export default class AddShow extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>New Show</h1>
                </header>
                <section className="record-show">
                    <form>
                        <div className="form-section">
                            <label htmlFor="show-name">Name</label>
                            <input type="text" name="show-name" placeholder="Amateur Night" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="date">Date</label>
                            <input type="date" id="date" name="show-date" min="2020-04-25" max="2050-01-01" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="time">Time</label>
                            <input type="time" id="default-picker" className="time-picker" min="12:00" max="11:00" placeholder="Select time" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="form-section">Comics</label>
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
            </div>
        )
    }
}