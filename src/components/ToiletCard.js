import React, { Component } from "react"
import "../css/ToiletCard.css"
import "../css/weather-icons.min.css"


class WeatherBoards extends Component {

    componentDidMount() {
    setInterval(() => {
     this.setState({time: Date.now()})    
    }, 1000)
  }

  render() {
    return (
      
      <div className="WeatherBoards">

        <div className="WeatherLeft-board">
          <div className="ToiletCard-icon-container">
          </div>
          
          <h2 style={{fontSize: '20px'}} className="ToiletCard-city">
          Here at BlendxBatch we pride ourselves on the cleanliness of our facilities. If our restrooms are not up to your standards, please inform a member of staff or press the check button to the right of this text.          </h2>

        </div>

        <div className="ToiletRight-board">

          <div className="ToiletCard-detail">

            <div>
              {/* <button className="CheckButton" onClick={() => console.log(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'}))}> CHECK</button> */}
              {/* <button className="CheckButton" onClick={localStorage.setItem('items',(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})))}> CHECK</button> */}
              <button className="CheckButton" onClick={() => localStorage.setItem('lastCheck',(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})))}>click me</button>


            </div>

          </div>

          <div className="ToiletCard-detail-left">

            <div>
              <h2 onDoubleClick={() => alert('kyle')}>Last Toilet Check</h2>
              <br>
              </br>
              <h2>{localStorage.getItem("lastCheck")}</h2>

            </div>
            <div>
            </div>

          </div>

        </div>
        
      </div>
    )
  }
}

export default WeatherBoards
