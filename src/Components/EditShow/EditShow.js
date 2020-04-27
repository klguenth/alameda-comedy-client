import React from 'react';

export default class EditShow extends React.Component {
    render() {
        return (
            <div>
                <nav role="navigation">Nav</nav>
                <header>
                    <h1>Edit Show</h1>
                </header>
                <section>
                    <form id="record-show">
                        <div class="form-section">
                            <label for="show-name">Show Name</label>
                            <input type="text" name="show-name" placeholder="Amateur Night" required />
                        </div>
                        <label for="start">Show Date</label>
                        <input type="date" id="start" name="trip-start"
                        value="2020-07-11"
                        min="2020-04-25" max="2050-01-01" />
                        <div class="form-section">
                            <label for="form-section">Comic Search</label>
                            <input type="text" placeholder="Search" />
                        </div>
                        <div class="form-section">
                            <label for="note-summary">Notes</label>
                            <textarea name="note-summary" rows="10"   required></textarea>
                        </div>
                        <button type="submit">Submit</button>
                        <button type="reset">Reset</button>
                    </form>
                </section>
            </div>  
        );
    }
}