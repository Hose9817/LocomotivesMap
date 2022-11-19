import { Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";
// import { connect } from "react-redux";

const OneMarker = (props) => {
    // console.log('OneMarker', props.el.name)
    const position = props.el.coordinates
    const divStyle = {
        background: `white`,
        border: `1px solid #ccc`,
        padding: 10
    }
    const onLoad = infoWindow => {
        // console.log('infoWindow: ', infoWindow)
    }

    const [openModal, setOpenModal] = useState(false);

    const openMapModal = () => {
        setOpenModal(!openModal);
    };

    return (
        <Marker
            position={position}
            onClick={() => openMapModal()}


        >
            {openModal && <InfoWindow
                onLoad={onLoad}
                position={position}
            >
                <div style={divStyle}>
                    <h5>{props.el.name}</h5>
                    <p>{props.el.series}</p>
                    <p>{props.el.numberOfSections}</p>
                </div>
            </InfoWindow>}
        </Marker>
    )

}

// const mapStateToProps = (state) => ({
//     cards: state.cards
// })

export default OneMarker;
