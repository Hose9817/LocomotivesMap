import { Modal, ModalHeader, Label, ModalBody, Input, ModalFooter } from "reactstrap";
import { Button } from "@mui/material";

import "./ModalStyles.css"
import InputAutocomp from "../locomOnMap/InputAutocomp";
import { useState } from "react";

function LocomModal(props) {

    const [name, setName] = useState('');
    const [series, setSeries] = useState('')
    const [sections, setSections] = useState('')
    const [location, setLocation] = useState({})
    const [isOpen, setIsOpen] = useState(false)


    const createButHandler = () => {
        props.addNewCard(name, series, sections, location);
        setName('');
        setSeries('')
        setSections('')
        setLocation({})
        setIsOpen(false)
    };

    const setNameHandler = (e) => {
        setName(e.target.value)
    }
    const setSeriesHandler = (e) => {
        setSeries(e.target.value)
    }
    const setSectionsHandler = (e) => {
        setSections(e.target.value)
    }
    const setLocationHandler = (value) => {
        setLocation(value)
    }

    return (
        <div style={{ 'padding': '20px' }}>

            <Button
                onClick={() => setIsOpen(!isOpen)}
                variant="contained"
                size="large"
            >Create new locomotive</Button>


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
                            Add new Locomotive
                        </ModalHeader>

                        <ModalBody style={{ 'background': 'rgb(138, 134, 134)' }}>
                            <Label style={{ 'color': 'white' }}>Name:</Label>
                            <Input
                                placeholder="type new name"
                                type="text"
                                value={name}
                                onChange={setNameHandler}
                            />
                            <br />

                            <Label style={{ 'color': 'white' }}>Series:</Label>
                            <Input
                                placeholder="type serie"
                                type="text"
                                value={series}
                                onChange={setSeriesHandler}>
                            </Input>
                            <br />

                            <Label style={{ 'color': 'white' }}>Sections:</Label>
                            <Input
                                placeholder="type sections"
                                type="number"
                                value={sections}
                                onChange={setSectionsHandler}>
                            </Input>
                            <br />

                            <Label style={{ 'color': 'white' }}>Location:</Label>
                            {/* <Input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}>
                            </Input>  */}
                            <InputAutocomp setLocationHandler={setLocationHandler} />
                        </ModalBody>

                        <ModalFooter style={{ 'background': 'rgb(138, 134, 134)' }}>

                            <Button sx={{ 'marginRight': '10px' }}
                                variant="contained"
                                onClick={() => createButHandler()}
                            >Create new</Button>

                            <Button
                                color="error"
                                variant="contained"
                                onClick={() => setIsOpen(false)}
                            >Cancel</Button>

                        </ModalFooter>
                    </Modal>
                </>
            }
        </div>
    )
}

export default LocomModal;