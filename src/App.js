import React, { Component } from "react"
import "./css/App.css"

import WeatherCard from "./components/WeatherCard"
import ToiletCard from "./components/ToiletCard"
import API_KEY from "./config.js"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weatherData: {
        weather: "",
        city: "",
        country: "",
        temp: 0
      },
      searchDone: false,
      savedCities: [],
      hasSavedCities: false,
      errorMessage: ""
    }

    this.callWeatherData = this.callWeatherData.bind(this)
    this.updateSavedCities = this.updateSavedCities.bind(this)
  }

  callWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}`
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          main: data.main,
          wind: data.wind,
          humidity: data.main.humidity,
          wind_direction: data.wind.deg,
          pressure: data.main.pressure,
          sunrise: data.sys.sunrise,
          visibility: data.visibility,
          sunset: data.sys.sunset
        }
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        })
      })
      .catch(error => {
        // If an error is catch, it's sent to SearchBar as props
        this.setState({ errorMessage: error.message })
      })

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    }
  }
  // componentDidMount() {
  //   setInterval(() => {
  //    this.setState({time: Date.now()})    
  //   }, 1000)
  // }

  updateSavedCities(cityArr) {
    // hasCities is set to true if length is more than 0, otherwise false
    const hasCities = cityArr.length > 0
    this.setState({ savedCities: cityArr, hasSavedCities: hasCities })
  }

  componentWillMount() {

    const url = `https://api.openweathermap.org/data/2.5/weather?q=banbridge&APPID=${API_KEY}`
    fetch(url)
      .then(handleErrors)
      .then(resp => resp.json())
      .then(data => {
        const weatherObj = {
          weather: data.weather,
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          main: data.main,
          wind: data.wind,
          humidity: data.main.humidity,
          wind_direction: data.wind.deg,
          pressure: data.main.pressure,
          sunrise: data.sys.sunrise,
          visibility: data.visibility,
          sunset: data.sys.sunset
        }
        this.setState({
          weatherData: weatherObj,
          searchDone: true,
          errorMessage: ""
        })
      })

    function handleErrors(response) {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    }}

  render() {
    const {
      searchDone,
      weatherData,
      savedCities
    } = this.state
    
    return (
      <div className="App">
        {searchDone && (
          <WeatherCard
            weatherData={weatherData}
            savedCities={savedCities}
            callBackFromParent={this.updateSavedCities}
          />
        )}
                {searchDone && (
          <ToiletCard
            weatherData={weatherData}
            savedCities={savedCities}
            callBackFromParent={this.updateSavedCities}
          />
        )}
      </div>
    )
  }
}

export default App
