import React, { Component } from "react";

export class Weather extends Component {
  state = {
    temperature: false,
  };
  toggleTemp = () => {
    this.setState({
      temperature: !this.state.temperature,
    });
  };

  kelvinToF = (temp) => {
    return parseFloat(1.8 * (temp - 273) + 32).toFixed(0);
  };
  kelvinToC = (temp) => {
    return parseFloat(temp - 273.15).toFixed(0);
  };

  imgPath = (icon) => {
    return `http://openweathermap.org/img/wn/${icon}@2x.png`;
  };

  render() {
    console.log(this.state.temperature);
    const { temp, feels_like, humidity } = this.props.weathers;
    const name = this.props.location;

    return (
      <div className="card-container">
        <div className="weather">
          <div className="text-right temp-switch">
            {this.state.temperature === false ? (
              <p onClick={this.toggleTemp}>°F</p>
            ) : (
              <p onClick={this.toggleTemp}>°C</p>
            )}
          </div>
          <h3>Weather Report</h3>
          <div className="weather-icon">
            {this.props.descriptions.map((info) => (
              <>
                <div key={info.id}>
                  <img src={this.imgPath(info.icon)} alt={info.main} />
                  <p>{info.description}</p>
                </div>
              </>
            ))}
            <h4>
              Today is
              {this.state.temperature === false ? (
                <span> {this.kelvinToF(temp)}°F </span>
              ) : (
                <span> {this.kelvinToC(temp)}°C </span>
              )}
              in <u>{name}</u>
            </h4>
            <p>
              Feels like:
              {this.state.temperature === false ? (
                <span> {this.kelvinToF(feels_like)}°F </span>
              ) : (
                <span> {this.kelvinToC(feels_like)}°C </span>
              )}
              | Humidity: {humidity}%
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
