import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        weatherData: [],
        filteredWeatherData: [],
      }
      this.handleDateChange = this.handleDateChange.bind(this);
    }

    // load singapore weather json into state.weatherData first so that won't have to load it again
    componentDidMount(){
      //const city = "Singapore";
      fetch("http://api.openweathermap.org/data/2.5/forecast?q=Singapore&units=metric&APPID=d5fc7ebe276faf34c819f53c5660d7eb")
      .then(response => response.json())
      .then(data => this.setState({weatherData: data.list})
      );
    }

    handleDateChange(event){
      let temp = this.state.weatherData.filter(function(index) {
        return index.dt_txt.split(" ")[0] === event.target.value;
        });
      this.setState({filteredWeatherData: temp.map(index => 
        <li>{
          index.dt_txt +
          "--" +
          "Temperature: " +
          index.main.temp +
          " | " +
          "Weather: " + 
          index.weather[0].main +
          ", " +
          index.weather[0].description
        }</li>)
      }
      );
    }

    render() {
      return (
        <form id="form">
          <label class="howToUseApp">
            Please enter a date to see forecasted weather in Singapore:<br></br>
            (Example: 2019-04-28)<br></br>
          </label>
          <br></br>
          <label class="warning">  
            You can only see forecast details for 5 days including today<br></br>
            Example: Today's date is 2019-05-01. You can only see weather details for<br></br>
            2019-05-01 | 2019-05-02 | 2019-05-03 | 2019-05-04 | 2019-05-05<br></br>  
          </label>  
          <br></br>
          <label>
            Date (YYYY-MM-DD) :<br></br>
            <input type="text" value={null} onChange={this.handleDateChange}></input><br></br>
            <br></br>
          </label>
          <br></br>        
          <label>Forecasted Results: </label><br></br>
          <ul>{this.state.filteredWeatherData}</ul><br></br>
        </form>
      );
    }
}      

export default App;