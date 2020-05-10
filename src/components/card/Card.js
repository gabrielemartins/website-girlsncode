import React, { Component } from "react";

import "./card.css";

export default class Card extends Component {
  render() {
    return (
      <div class="card text-white bg-dark mb-3">
        <div class="card-body">
          <div className="test">
            <img
              src={this.props.cardImg}
              className="icon"
              alt={this.props.cardTitulo}
            />
            <div>
              <h5 class="card-title">{this.props.cardTitulo}</h5>
              <p class="card-text">{this.props.cardSubtitulo}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
