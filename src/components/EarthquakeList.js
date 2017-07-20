import React, {Component} from 'react'
import earthquake from '../data/earthquakes.js'
import moment from 'moment'


export default class EarthquakeList extends Component {
  render() {
    return (

      <div className="quake-list">
  {earthquake.features.map((quake) => <div className="col-sm-6" key={quake.id}>
    <div className="card">
      <div className="card-block">
        <h4 className="card-title">{quake.properties.place}</h4>
        <h6 className="card-subtitle mb-2 text-muted">Magnitude: {quake.properties.mag}</h6>
        <h6 className="card-subtitle mb-2 text-muted">Time: {moment(quake.properties.time).format('llll')}</h6>
        <p className="card-text">Coordinates: {quake.geometry.coordinates}</p>

        <a href={quake.properties.url} className="card-link">USGS Event Link</a>
      </div>
    </div>
  </div>)}
</div>



    )
  }
}
