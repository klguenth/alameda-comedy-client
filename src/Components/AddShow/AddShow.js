import React from 'react';

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
                            <label htmlFor="show-name">Show Name</label>
                            <input type="text" name="show-name" placeholder="Amateur Night" required />
                        </div>
                        <div className="form-section">
                            <label htmlFor="start">Show Date</label>
                            <input type="date" id="start" name="trip-start" min="2020-04-25" max="2050-01-01" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="form-section">Comic Search</label>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div className="form-section">
                            <label htmlFor="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10" required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </section>  
            </div>
        )
    }
}