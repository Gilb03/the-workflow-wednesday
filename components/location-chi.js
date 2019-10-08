import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import _ from 'lodash';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={15}
    defaultCenter={{ lat: 41.9320583, lng: -87.7158 }}
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

const LocationChi = () => (
  <div id="location" style={{ 'backgroundColor': 'white', 'textAlign': 'center' }} className="section location">
    <h2 className="title is-2"></h2>
    <div className="columns">
      {/* <div className="column">
        <img src="/static/freedom-center.jpg" alt="" />
        <h3 className="title is-3">National Underground Railroad Freedom Center</h3>
        <a href="https://goo.gl/maps/eWq3GswALPq">50 E Freedom Way, Cincinnati, OH 45202</a>
      </div> */}
      <div className="column">
        <div className="block">
          <h4>The Second Shift</h4>
          <h4><a class="btn btn-primary" href="https://bit.ly/2OdB3ji" target="_blank">Chicago Registration</a></h4>
          <a target="_blank" style={{ "marginRight":"spacing + 'em'","color": "black" }} href="https://goo.gl/maps/i8fhL65pXC22">3432 W Diversey Ave., Chicago, IL 60647</a>
          <iframe src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ7eQqc3TND4gRAOH4kESIeYs&key=AIzaSyAwzu9UHFXD_TG3k6u8VZUxyEEatg-AvBw" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen></iframe>
        </div>
      </div>
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
        font-weight: bold;
      }
    `}</style>
  </div>
)

export default LocationChi