import React, { Component } from 'react';
import { connect } from 'react-redux';

import GoogleMap from './../components/google-map';

import Chart from './../components/chart';

class WeatherList extends Component {

  renderWeather (cityData) {
    let temperatures = cityData.list.map((weather) => weather.main.temp),
        pressures = cityData.list.map((weather) => weather.main.pressure),
        humidities = cityData.list.map((weather) => weather.main.humidity),
        { lon, lat } = cityData.city.coord,
        tdStyle = {
          width: '150px',
          height:'150px',
          textAlign: 'center'
        };

    return (
      <tr key={ cityData.city.id }>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td style={tdStyle}><Chart width={100} height={100} data={temperatures} color="red" units="K"/></td>
        <td style={tdStyle}><Chart width={100} height={100} data={pressures} color="blue" units="hPa"/></td>
        <td style={tdStyle}><Chart width={100} height={100} data={humidities} color="green" units="%"/></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          { this.props.weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps ({ weather }) {
  return { weather };
}

export default connect(mapStateToProps)(WeatherList)