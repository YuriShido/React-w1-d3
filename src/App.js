
import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import M from 'materialize-css'
import Header from './Header'
import Modal from './Modal'

class App extends Component {
  constructor() {
    super()
    this.state = {
      temp: '',
      cityName: '',
      weather: '',
      high: '',
      low: '',
      icon: '',
      showModal: false,
    }
  }

  componentDidMount() {
    
    const url = `https://api.openweathermap.org/data/2.5/weather?q=Vancouver&units=metric&appid=${process.env.REACT_APP_REACT_D3_APP}`
    axios.get(url).then((response) => {
      console.log(response)
       this.setState({
      temp: response.data.main.temp,
      cityName: response.data.name,
      weather: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      icon:response.data.weather[0].icon,
    })
   })
    

    var elems = document.querySelectorAll('.modal')
    var instances = M.Modal.init(elems)
  }

  render() {
    const iconUrl = `http://openweathermap.org/img/w/${this.state.icon}.png`
    return (
      <div className="App">
        <Header cityName={this.state.cityName} temp={this.state.temp} />

        <button data-target='modal1' className='btn modal-trigger'>
          Modal
        </button>
        <Modal cityName={this.state.cityName} temp={this.state.temp} high={this.state.high} low={this.state.low} weather={this.state.weather} icon={iconUrl}/>
        {/* <div id='modal1' className='modal'>
          <div className='modal-content'>
            <h4>{this.state.cityName}</h4>
            <p>
              High: {this.state.high} - Low: {this.state.low}
            </p>
            <p>
              {this.state.weather} <img src={iconUrl} alt='icon' />
            </p>
          </div>
          <div className='modal-footer'>
            <a
              href='#!'
              className='modal-close waves-effect waves-green btn-flat'
            >
              Close
            </a>
          </div>
        </div> */}
      </div>
    )
  }
}

export default App