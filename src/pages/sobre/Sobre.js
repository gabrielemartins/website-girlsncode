import React, { Component } from "react";
import "./sobre.css";
import Menu from "./../../components/menu/Menu";
import Card from "./../../components/card/Card";
import miguel from "../../assets/miguel.jpg";
import daniel from "../../assets/daniel.jpg";
import gabi from "../../assets/gabi.jpg";
import thaina from "../../assets/thaina.png";
import amanda from "../../assets/amanda.png";

export default class Sobre extends Component {
  render() {
    return (
      <div>
        <Menu />
        <div className="principal pri">
          <div className="te">
            <h1 className="sobreTitulo">Sobre o Projeto</h1>
          </div>
          <div className="t">
            <h3>Resumo</h3>
            <p>
              Atualmente existe uma preocupação mundial relacionado à
              discrepância entre o número de mulheres e homens envolvidos com as
              áreas relacionadas à Tecnologia da Informação e Engenharias.
              Preocupação inclusive externada pela UNESCO, o que vem gerando
              várias iniciativas, programas e projetos com foco no empoderamento
              feminino, bem como visando despertar o interesse das meninas e
              mulheres para as carreiras e disciplinas STEM, ou seja, vinculadas
              a ciência, matemática, computação e engenharias. Sendo assim, este
              projeto visa contribuir com esta temática, inserindo na região de
              abrangência da Unigranrio, o gosto e o interesse feminino a
              ingressar na área de tecnologia, promovendo oficinas, criando
              objetos de aprendizagem e organizando eventos para ajudar a
              integrar a igualdade e proporcionar mais caminhos para o bem-estar
              do ser humano por meio da inovação tecnológica e criatividade.
            </p>
            <h3> Objetivos </h3>
            <p>
              Despertar o interesse de meninas estudantes do ensino médio na
              região de abrangência da Unigranrio às áreas relacionadas à
              computação e robótica, para familiarizá-las melhor com temas
              vinculados a Tecnologia da Informação e Comunicação e para
              estimulá-las a seguir carreira nessa área, fomentando assim a
              economia criativa, inovação e a trabalhabilidade na região.
            </p>
            <h4>Objetivos Específicos</h4>
            <ul>
              <li>
                Desenvolvimento de ações socioeducativas para inclusão,
                desmistificação e empoderamento da mulher em tecnologias da
                informação e comunicação.
              </li>
              <li>
                Proporcionar às alunas o primeiro contato com a área de
                programação e criação de aplicativos e experimentos em robótica.
              </li>
              <li>
                Possibilitar para meninas e meninos de escolas públicas alcance
                à geração de inovação e transformação do mundo por meio da
                computação;
              </li>
              <li>
                Inserir as alunas dos cursos de TI da Unigranrio em projetos de
                pesquisa e extensão, bem como gerar exemplo para outras meninas;
              </li>
            </ul>
            <h3> Resultados Esperados </h3>
            <p>
              Os resultados esperados compreendem a experimentação do aluno com
              a aplicação de conhecimentos adquiridos nos cursos de Tecnologia
              da Informação, mais fortemente à aplicação dos conhecimentos de
              lógica e programação, o que cria uma gama de possibilidades para
              estudos de iniciação científica, artigos científicos voltados para
              práticas que incentivam a participação feminina nas áreas de
              tecnologia, engenharia e matemática.{" "}
            </p>
            <p>
              {" "}
              Com isso, este Projeto de Extensão visa estimular fortemente a
              formação de mulheres e jovens do Ensino Médio para as carreiras de
              Ciências Exatas, sem desconsiderar o contexto social e econômico
              das escolas públicas da região de influência da Unigranrio.
            </p>
            <p>
              {" "}
              Além disso, outra meta que será perseguida será o de integrar o
              Programa Meninas Digitais da Sociedade Brasileira de Computação,
              isto é, fazer parte do âmbito nacional com este projeto, gerando
              visibilidade e portfólio para as alunas dos cursos de TI da
              Unigranrio.
            </p>
          </div>
          <div className="t">
            <h3> Membros </h3>
            <div className="row justify-content-md-center">
              <div className="col">
                <Card
                  cardImg={daniel}
                  cardTitulo="Daniel de Oliveira, Dr."
                  cardSubtitulo="Professor Orientador"
                />
              </div>
              <div className="col">
                <Card
                  cardImg={miguel}
                  cardTitulo="Miguel Carvalho, MSc."
                  cardSubtitulo="Professor Orientador"
                />
              </div>
            </div>
            <div className="row justify-content-md-center">
              <div className="col">
                <Card
                  cardImg={amanda}
                  cardTitulo="Amanda dos Santos Benevides."
                  cardSubtitulo="Voluntária"
                />
              </div>
              <div className="col">
                <Card
                  cardImg={gabi}
                  cardTitulo="Maria Gabriele da Silva Martins"
                  cardSubtitulo="Voluntária"
                />
              </div>
              <div className="col">
                <Card
                  cardImg={thaina}
                  cardTitulo="Thainá Monteiro Ferreira"
                  cardSubtitulo="Voluntária"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
