import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div>Home Page</div>
                <div><Link to='/deck-box'>Link To Deckbox</Link></div>
            </div>
        );
    }
}

export default Home