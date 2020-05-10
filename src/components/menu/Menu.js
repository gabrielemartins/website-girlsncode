import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./menu.css";

export default class Menu extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark teste">
        <Link class="navbar-brand" href="/">
          Girls'N Code
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/sobre">
                Sobre
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
