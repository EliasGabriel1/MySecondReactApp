import React from "react";
import "./index.css";
import axios from "axios";

export default class Weather extends React.Component {
  state = {
    dadosmain: [],
    data:[],
    weathermain:[],
    cloudsmain:[],
    windmain:[],
  };

  /*url + key: http://api.openweathermap.org/data/2.5/weather?q=marilia&appid=8c19dc1f9afa9647135211f46fb5b815&units=metric */

  componentDidMount() {
    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=marilia&appid=8c19dc1f9afa9647135211f46fb5b815&units=metric`)
      .then(res => {
        const dadosmain = res.data.main;
        const weathermain = res.data.weather;
        const cloudsmain = res.data.clouds;
        const windmain = res.data.wind;
        const data = res.data;
        this.setState({ dadosmain, data, cloudsmain, windmain });
      })
  }
  render() {
      const dados = this.state.dadosmain
      const weather = this.state.weathermain[0]
      const nuvens = this.state.cloudsmain
      const vento = this.state.windmain
    return (
      <div>
        <h2>Weather </h2>
        <p>
          Temperature for {this.state.data["name"]}, BR: weather with a temperature of {dados.temp} and feeling of {dados.feels_like} .The maximum temperatures for today is {dados.temp_max} and minimum temperatures of {dados.temp_min}. With air pressure of {dados.pressure}. <br/>
          The amount of cloud in the sky is {nuvens.all}%<br/>
          {this.state.data["visibility"]} visibility, with winds of {vento.speed} to {vento.deg} degrees north.<br/>
          and the humidity is {dados.humidity}%<br/>
        </p>
      </div>
    );
  }
}