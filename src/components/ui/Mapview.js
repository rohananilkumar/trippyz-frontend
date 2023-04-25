import React from 'react'
import {Map,GoogleApiWrapper} from 'google-maps-react'

class MapContainer extends Component {
    render() {
      return (
        <Map 
        google={this.props.google} 
        zoom={14}
        style={{width:"100%",height:"100%"}}
        initialCenter={
            {
                lat:12.107000,
                lng:75.209396
            }
        }>
          {/* Map components go here */}
        </Map>
      );
    }
  }
  

  export default GoogleApiWrapper({
    apiKey: 'YOUR_API_KEY',
  })(MapContainer);
