import React, { Component } from "react"
import "../css/ToiletCard.css"
import "../css/weather-icons.min.css"
import Swal from 'sweetalert2'


async function toiletCheck(){
  const { value: formValues } = await Swal.fire({
    title: 'Summary',
    inputLabel: 'Your email address',
    html:
      '<input id="swal-input1" class="swal2-input" value="Staff Name">' +
      '<input id="swal-input2" class="swal2-input" value="Notes? (Optional)">',
    focusConfirm: false,
    preConfirm: () => {
      return [
        document.getElementById('swal-input1').value,
        document.getElementById('swal-input2').value
      ]
    }
    
  })
  localStorage.setItem('test', formValues + new Date())
  localStorage.setItem('lastCheck',(new Date().toLocaleTimeString('en-GB', {hour: '2-digit', minute:'2-digit'})))

}


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
              <button className="CheckButton" >CHECK</button>


            </div>

          </div>

          <div className="ToiletCard-detail-left">

            <div>
              <h2 onDoubleClick={() => toiletCheck()}>Last Toilet Check</h2>
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
