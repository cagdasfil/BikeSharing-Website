import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import { Paper } from '@material-ui/core';
import { Typography } from '@material-ui/core';



class GoogleMapsContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            zones: [],
            showingInfoWindow: false,
            activeMarker: {}
        }
        // binding this to event-handler functions
        this.onMarkerClick = this.onMarkerClick.bind(this);
    }
    onMarkerClick = (prop, marker) => {
        this.setState({
            activeMarker: marker
        });
    }


    componentWillMount() {
        fetch('http://35.189.94.121/zones/withBikes', {
            method: 'get'
        })
            .then((response) => {
                return response.json();
            })
            .then((loginResponse) => {
                let zones = [...this.state.zones];
                loginResponse.data.map((zone) => zones.push(zone));
                this.setState({ zones });
            });

    }


    render() {
        const style = {
            width: '75vw',
            height: '75vh',
            'marginLeft': 'auto',
            'marginRight': 'auto'
        }

        let markers = [];
        this.state.zones.map((zone) => {
            let lat = zone.center.geometry.coordinates[1];
            let lng = zone.center.geometry.coordinates[0];
            let name = zone.currentZone.name;
            let address = zone.currentZone.address;
            markers.push(
                <Marker
                    key={name}
                    onClick={this.onMarkerClick}
                    title={address}
                    position={{ lat: lat, lng: lng }}
                    name={name}
                />
            );
        })



        return (
            <Map
                item
                xs={12}
                style={style}
                google={this.props.google}
                zoom={14}
                initialCenter={{ lat: 39.895001, lng: 32.777934 }}
            >
                {markers}
                {this.state.activeMarker
                    ? (<InfoWindow marker={this.state.activeMarker} visible={true}>
                        <Paper>
                            <Typography variant='headline' component='h4'>
                                {this.state.activeMarker.name}
                            </Typography>
                            <Typography component='p'>
                                {this.state.activeMarker.title}
                            </Typography>
                        </Paper>
                    </InfoWindow>)

                    : (null)
                }
            </Map>
        );
    }
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyB5rTxMLoYvxdIGRucqYY9xlNOMBJFRUPU')
})(GoogleMapsContainer)