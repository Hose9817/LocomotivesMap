import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
//при утановке combobobox используй команду: npm i @reach/combobox --legacy-peer-deps

import { connect } from "react-redux"
import { useState, useEffect } from "react";


const inputStyle = {
    width: '250px',
    padding: '0.5rem',
    border: 'solid 2px grey',
    position: 'relative',
    // 'zIndex': '100',
    // margin: '55px 10px',
    // position: 'absolute',
}

const InputAutocomp = (props) => {

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        props.setLocationHandler(selected)
        
    }, [selected])

    // console.log(props.tempCoord);

    return (

        <>
            <div>
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
        </>

    )
}


const PlacesAutocomplete = ({ selected, setSelected }) => {

    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setSelected({ lat, lng });
    }


    return <Combobox onSelect={handleSelect}>
        <ComboboxInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
            disabled={!ready}
            style={inputStyle}
            placeholder="Type adress"
        />
        <ComboboxPopover style={{
            'zIndex': '1056'
        }}>
            <ComboboxList >
                {status === "OK" &&
                    data.map(({ place_id, description }) => (
                        <ComboboxOption key={place_id} value={description} />
                    ))}
            </ComboboxList>
        </ComboboxPopover>
    </Combobox>



}

const mapStateToProps = (state) => ({
    tempCoord: state.tempCoord
})

const mapDispatchToProps = (dispatch) => ({
    newCoord: (location) => dispatch({ type: 'NEW_COORD', payload: location })
})

export default connect(mapStateToProps, mapDispatchToProps)(InputAutocomp);