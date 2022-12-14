import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { connect } from "react-redux";

import OneMarker from "./OneMarker";
import { defaultTheme } from "./Theme.js";


const containerStyle = {
    width: '100%',
    height: '100vh',
};

const dafaultOptions = {
    styles: defaultTheme
}

const libraries = ['places'];


function LocomotivesOnMap(props) {

    //Временный ключ (не стал скрывать через .env):
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEfSOdumWkvLPSGYoFgNFSSiiV4eU8WcI",
        libraries,
    });


    if (!isLoaded) return <div>Loading...</div>
    return <Map props={props} />

}



function Map({ props }) {
    const mapCenter = useMemo(() => ({ lat: 48.5, lng: 67 }), []);
    return (
        <GoogleMap
            zoom={5.2}
            center={mapCenter}
            mapContainerStyle={containerStyle}
            options={dafaultOptions}
        >

            {props.cards.map(el =>
                <OneMarker key={el.id} el={el} />
            )}
        </GoogleMap>

    );
}

const mapStateToProps = (state) => ({
    cards: state.cards
})

export default connect(mapStateToProps)(LocomotivesOnMap);