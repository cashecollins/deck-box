import React, { Component } from 'react';
import '../styles/deck-box.css';
import '../App.css';
import axios from "axios";

class DeckBox extends Component {
    constructor(props) {
        super(props);
        this.state = {decks: []};
    }

    titanBackground = 'https://www.cardmarket.com/img/insight/cardart/1585936071_primeval%20titan.jpg';
    liquimetalBackground = 'https://media.edhrec.com/articles/wp-content/uploads/2018/10/rc210_liquimetal_coating-1.jpg'
    bloodMoonBackground = 'https://media.magic.wizards.com/images/hero/gplille_bloodmoon_thumb.jpg'

    componentDidMount() {
        // test data
        var decks = [
            {id: 1, background: this.titanBackground, name: 'Amulet Titan'},
            {id: 2, background: this.bloodMoonBackground, name: 'Ponza'},
            {id: 3, background: this.liquimetalBackground, name: 'Liquimetal Midrange'},
            {id: 4, background: this.titanBackground, name: 'Amulet Titan'},
            {id: 5, background: this.bloodMoonBackground, name: 'Ponza'},
            {id: 6, background: this.liquimetalBackground, name: 'Liquimetal Midrange'},
            {id: 7, background: this.titanBackground, name: 'Amulet Titan'},
            {id: 8, background: this.bloodMoonBackground, name: 'Ponza'},
            {id: 9, background: this.liquimetalBackground, name: 'Liquimetal Midrange'}
        ]
        this.setState({decks: decks})

        // post api setup
        axios.get(`https://api.magicthegathering.io/v1/cards?name=primeval+titan`)
            .then(result => {
                console.log(result);
                const card_data = result.data;
                console.log(card_data)
                // this.setState({ decks: decks });
            })
    }

    render() {
        return (
            <div className="deck-box-container">
                <div className="deck-box-side-nav">
                    <div className="deck-box-nav-option">Standard</div>
                    <div className="deck-box-nav-option">Modern</div>
                    <div className="deck-box-nav-option">Pioneer</div>
                    <div className="deck-box-nav-option">Commander</div>
                </div>
                <div className="deck-box-contents-container">
                    {this.state.decks.map((deck) =>
                        <div className="deck-box" style={{backgroundImage: `url(${deck.background})`}}>
                            <div className="deck-title">{deck.name}</div>
                        </div>)
                    }
                </div>
            </div>
        );
    }
}

export default DeckBox