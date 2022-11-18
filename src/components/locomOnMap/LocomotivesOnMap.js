import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { connect } from "react-redux";
import InputAutocomp from "./InputAutocomp";
// import InputAutoPlace from "./InputAutoPlace";
import OneMarker from "./OneMarker";

// import '../../global.css'
// import { v4 as uuidv4 } from 'uuid';

const containerStyle = {
    width: '100%',
    height: '100vh'
};

// const [ libraries ] = useState(['places']);


function LocomotivesOnMap(props) {

    //Временный ключ (не стал скрывать через .env):
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAEfSOdumWkvLPSGYoFgNFSSiiV4eU8WcI",
        libraries: ["places"],
    });


    if (!isLoaded) return <div>Loading...</div>
    return <Map props={props} />

}



function Map({ props }) {
    const mapCenter = useMemo(() => ({ lat: 48.5, lng: 67 }), []);
    // console.log(props.cards)
    return (
        <GoogleMap
            zoom={5}
            center={mapCenter}
            mapContainerStyle={containerStyle}
        >
            <InputAutocomp newPosition={props.newPosition} />
            {/* <InputAutoPlace/> */}

            {props.cards.map(el =>
                // console.log(el.id)
                <OneMarker key={el.id} el={el} />
            )}
        </GoogleMap>

    );
}

const mapStateToProps = (state) => ({
    cards: state.cards
})

export default connect(mapStateToProps)(LocomotivesOnMap);