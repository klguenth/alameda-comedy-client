import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return(
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/showList'>Show List</Link>
                <Link to='/addComedian'>Add Comedian</Link>
            </nav>
        )
    }
}