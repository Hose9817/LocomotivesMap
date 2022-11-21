import { Marker, InfoWindow } from "@react-google-maps/api";
import { useState } from "react";

const OneMarker = (props) => {

    const position = props.el.coordinates
    const divStyle = {
        'min-width': '100px',
    }
    const icon = { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Location_dot_red.svg/2048px-Location_dot_red.svg.png', scaledSize: { width: 20, height: 20 } };
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
            icon={icon}

        >
            {openModal && <InfoWindow
                onLoad={onLoad}
                position={position}
            >
                
                <div style={divStyle}>
                    <label>name:</label><h5>{props.el.name}</h5>
                    <br />
                    <label>series:</label><p style={{'fontSize': '16px'}}><b>{props.el.series}</b></p>
                    <br />
                    <label>sections:</label><p style={{'fontSize': '16px'}}><b>{props.el.numberOfSections}</b></p>
                </div>

            </InfoWindow>}
        </Marker>
    )

}

export default OneMarker;
