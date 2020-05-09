import React, { Component } from "react";
import "./../../global.css";
import "./home.css";
import development from "./../../assets/development.png";
import Menu from "./../../components/menu/Menu";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="principal homePrincipal">
          <div className="infos">
            <h1 className="tituloPrincipal">Girls'N Code</h1>
            <p>
              Projeto de Extensão para Ensino de Programação para Jovens e
              Mulheres.
            </p>
          </div>
          <img
            src={development}
            className="imagemPrincipal img-fluid"
            alt="garota e tecnologia"
          />
        </div>
      </div>
    );
  }
}
