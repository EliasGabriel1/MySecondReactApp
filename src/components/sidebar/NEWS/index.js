import React from "react";
import "./index.css";
import axios from "axios";

export default class NEWS extends React.Component {
  state = {
    dadosmain: [],
    data:[],
    weathermain:[],
    cloudsmain:[],
    windmain:[],
  };

  /*senha: https://newsapi.org/v2/everything?q=Apple&from=2021-09-12&sortBy=popularity&apiKey=547c169ff2f94786803f76b388bb26fd */

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-09-12&sortBy=popularity&apiKey=547c169ff2f94786803f76b388bb26fd`)
      .then(res => {
        const dadosarticles = res.data.articles;
        const articles = res.data.articles;
        const data = res.data;

        const listItems = articles.map((articles) =>
        <p>
            <h3>By: {articles["author"]}</h3>
            <h4>Published at: {articles["publishedAt"].substr(8,2)}/{articles["publishedAt"].substr(5,2)}/{articles["publishedAt"].substr(0,4)}</h4>
            <p className="title">{articles["title"]}</p>
            <div>
                <img className="img" src={articles["urlToImage"]} alt={articles["title"]} />
                <p className="Descricao">{articles["description"]}</p>
                <a className="Link" href={articles["url"]}> Clique here to learn more. </a>
            </div>
        </p>
        );

        this.setState({ dadosarticles, data, articles,listItems });
      })
  }



  render() {
    return (
      <div className="News">
        <h2>Noticias de última hora </h2>
            {this.state.listItems}
      </div>
    );
  }
}