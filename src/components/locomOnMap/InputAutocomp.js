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
    display: 'block',
    width: '100%',
    padding: '0.375rem 0.75rem',
    'font-size': '1rem',
    'font-weight': '400',
    'line-height': '1.5',
    color: '#212529',
    border: '1px solid #ced4da',
    'border-radius': '0.375rem',
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
            placeholder="type adress"
            required="true"
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