import { Modal, ModalHeader, Label, ModalBody, Input, ModalFooter } from "reactstrap";
import { Button } from "@mui/material"

import { useState } from "react";

import InputAutocomp from "../locomOnMap/InputAutocomp";

const UpdateModal = (props) => {

    const [name, setName] = useState(props.card.name)
    const [series, setSeries] = useState(props.card.series)
    const [sections, setSections] = useState(props.card.numberOfSections)
    const [location, setLocation] = useState(props.card.coordinates)
    const [isOpen, setIsOpen] = useState(false);

    const updNameBtnHandler = (e) => {
        setName(e.target.value)
    }
    const updSeriesBtnHandler = (e) => {
        setSeries(e.target.value)
    }
    const updSectionsBtnHandler = (e) => {
        setSections(e.target.value)
    }
    const setLocationHandler = (value) => {
        setLocation(value)
    }

    const saveButHandler = () => {

        const newCard = {
            id: props.card.id,
            name: name,
            series: series,
            numberOfSections: sections,
            coordinates: location
        }
        props.updateCard(props.card.id, newCard)
        setIsOpen(false);
    }

    return (
        <>

            {!isOpen && <Button sx={{
                'margin-right': '10px',
                ':hover': { 'color': 'grey' }
            }} color="inherit" variant="outlined" onClick={() => setIsOpen(true)} >Update</Button>}

            {isOpen &&
                <>
                    <Modal isOpen={isOpen} style={{
                        'max-width': '400px',
                        'min-height': '400px',
                        'lineHeight': '10px'
                    }}>
                        <ModalHeader style={{
                            'background': 'rgb(138, 134, 134)',
                            'color': 'white'
                        }}>
                            Change data of Locomotives
                        </ModalHeader>

                        <ModalBody style={{ 'background': 'rgb(138, 134, 134)' }}>
                            <Label style={{ 'color': 'white' }}>Name:</Label>
                            <Input
                                type="text"
                                value={name}
                                onChange={updNameBtnHandler}
                            />
                            <br />

                            <Label style={{ 'color': 'white' }}>Series:</Label>
                            <Input
                                type="text"
                                value={series}
                                onChange={updSeriesBtnHandler}>
                            </Input>
                            <br />

                            <Label style={{ 'color': 'white' }}>Sections:</Label>
                            <Input
                                type="number"
                                value={sections}
                                onChange={updSectionsBtnHandler}>
                            </Input>
                            <br />

                            <Label style={{ 'color': 'white' }}>Location:</Label>
                            {/* <Input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}>
                            </Input> */}

                            <InputAutocomp setLocationHandler={setLocationHandler} />

                        </ModalBody>

                        <ModalFooter style={{ 'background': 'rgb(138, 134, 134)' }}>
                            <Button
                                sx={{ 'marginRight': '10px' }}
                                variant="contained"
                                onClick={saveButHandler}
                            >Update</Button>
                            {' '}
                            <Button
                                color="error"
                                variant="contained"
                                onClick={() => setIsOpen(false)}
                            >Cancel</Button>
                        </ModalFooter>

                    </Modal>
                </>
            }
        </>

    )
}

export default UpdateModal;