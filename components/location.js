import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{ lat: 39.0976281, lng: -84.513433 }}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

const Location = () => (
  <div id="location" style={{ 'background-color': 'white', 'text-align': 'center' }} className="section location">
    <h2 className="title is-2">Location</h2>
    <div className="columns">
      {/* <div className="column">
        <img src="/static/freedom-center.jpg" alt="" />
        <h3 className="title is-3">National Underground Railroad Freedom Center</h3>
        <a href="https://goo.gl/maps/eWq3GswALPq">50 E Freedom Way, Cincinnati, OH 45202</a>
      </div> */}
      <div className="column">
        <div className="block">
          <a target="_blank" style={{ "color": "black" }} href="https://goo.gl/maps/eWq3GswALPq">50 E Freedom Way, Cincinnati, OH 45202</a>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3096.387068239024!2d-84.513158!3d39.097657!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841b1455d29db43%3A0xc160cf231595518f!2sNational+Underground+Railroad+Freedom+Center!5e0!3m2!1sen!2sus!4v1501212682884" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen></iframe>
        </div>
      </div>
      {/* <div className="elevator columns">
          <div className="column is-4 is-offset-4">
            <h3 className="title is-3">Directions</h3>
            <h4 className="title is-4">Traveling from I-71 (Soundbound)</h4>
            <p>Take I‐71/I‐75 North to SECOND STREET Downtown (you will want to be in the right hand lane when you are crossing the bridge) o At the 5th traffic light turn right onto MAIN STREET (Great American Ballpark will be on your left once on Main Street) o Turn RIGHT into the CENTRAL RIVER FRONT PARKING GARAGE</p>
            <hr />
            <h4 className="title is-4">Traveling from I-71 (Northbound)</h4>
            <p>Take I‐71 South to the THIRD STREET exit (you will need to be in the far left lane). Go straight on Third Street, turn left at the 4th traffic light onto WALNUT. At the first light turn left onto SECOND STREET. At the first traffic light turn right onto MAIN STREET (Great American Ballpark will be on your left once on Main Street)</p>
            <hr />
            <h4 className="title is-4">Traveling from I-75 North (Southbound)</h4>
            <p>Take I‐75 South to Cincinnati, Ohio and exit at SECOND STREET Downtown. At the 5th traffic light turn right onto MAIN STREET (Great American Ballpark will be on your left once on Main Street). Turn RIGHT into the CENTRAL RIVER FRONT PARKING GARAGE</p>
            <hr />
            <h4 className="title is-4">Traveling from I-71 (Soundbound)</h4>
            <p> Take I‐71/I‐75 North to SECOND STREET Downtown (you will want to be in the right hand lane when you are crossing the bridge). At the 5th traffic light turn right onto MAIN STREET (Great American Ballpark will be on your left once on Main Street). Turn RIGHT into the CENTRAL RIVER FRONT PARKING GARAGE</p>
          </div>
        </div> */}

    </div>
    <style jsx>{`
      .elevator {
        text-align: center;
      }
      a {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .location {
        color: black;
      }
    `}</style>
  </div>
)

export default Location
