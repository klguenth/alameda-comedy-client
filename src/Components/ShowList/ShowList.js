import React from 'react';

export default class ShowList extends React.Component {
    render() {
        return (
            <div>
                <nav role="navigation">Nav</nav>
                <main role="main">
                <header role="banner">
                    <h1>Show List</h1>
                </header>
                <button>Add Show</button>
                <section>
                    <header>
                        <h2>Amateur Night</h2>
                        <p>05.20.2020</p>
                    </header>
                    <ul>
                    <label>Comedians</label>
                    <li>Name 1</li>
                    <li>Name 2</li>
                    <li>Name 3</li>
                    </ul>
                    <button>Edit</button>
                    <button>Delete</button>
                </section>
                <section>
                    <header>
                    <h2>Pro Showcase</h2>
                    <p>6.12.2020</p>
                    </header>
                    <ul>
                    <label>Comedians</label>
                    <li>Name 1</li>
                    <li>Name 2</li>
                    <li>Name 3</li>
                    </ul>
                    <button>Edit</button>
                    <button>Delete</button>
                </section>
                <section>
                    <header>
                    <h2>Variety Show</h2>
                    <p>7.11.2020</p>
                    </header>
                    <ul>
                    <label>Comedians</label>
                    <li>Name 1</li>
                    <li>Name 2</li>
                    <li>Name 3</li>
                    </ul>
                    <button>Edit</button>
                    <button>Delete</button>
                </section>
                </main>
                <footer role="content-info">Footer</footer>
            </div>

        );
    }
}