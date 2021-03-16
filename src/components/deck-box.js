import React, { Component } from 'react';
import '../styles/deck-box.css';
import '../App.css';

class DeckBox extends Component {

    titanBackground = 'https://www.cardmarket.com/img/insight/cardart/1585936071_primeval%20titan.jpg';
    liquimetalBackground = 'https://media.edhrec.com/articles/wp-content/uploads/2018/10/rc210_liquimetal_coating-1.jpg'
    bloodMoonBackground = 'https://media.magic.wizards.com/images/hero/gplille_bloodmoon_thumb.jpg'

    render() {
        return (
            <div className="deck-box-container">
                <div className="deck-box" style={{backgroundImage: `url(${this.titanBackground})`}}>
                    <div className="deck-title">Amulet Titan</div>
                </div>
                <div className="deck-box" style={{backgroundImage: `url(${this.bloodMoonBackground})`}}>
                    <div className="deck-title">Ponza</div>
                </div>
                <div className="deck-box" style={{backgroundImage: `url(${this.liquimetalBackground})`}}>
                    <div className="deck-title">Liquimetal Midrange</div>
                </div>
            </div>
        );
    }
}

export default DeckBox