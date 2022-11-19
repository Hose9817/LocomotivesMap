import { Button, Modal, ModalHeader, Label, ModalBody, Input, ModalFooter } from "reactstrap";
import { useState } from "react";
import InputAutocomp from "../locomOnMap/InputAutocomp";

function LocomModal(props) {

    const [name, setName] = useState('');
    const [series, setSeries] = useState('')
    const [sections, setSections] = useState('')
    const [location, setLocation] = useState({})
    const [isOpen, setIsOpen] = useState(false)


    const createButHandler = () => {
        props.addNewCard(name, series, sections, location);
        // setName('');
        // setSeries('')
        // setSections('')
        // setLocation({})
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
        <div>

            <Button color="danger" onClick={() => setIsOpen(!isOpen)}>Create new</Button>
            {isOpen &&
                <>
                    <Modal isOpen={isOpen}>
                        <ModalHeader>
                            Add new Locomotive
                        </ModalHeader>

                        <ModalBody>
                            <Label>Name:</Label>
                            <Input
                                placeholder="type new name"
                                type="text"
                                value={name}
                                onChange={setNameHandler}
                            />

                            <Label>Series:</Label>
                            <Input
                                type="text"
                                value={series}
                                onChange={setSeriesHandler}>
                            </Input>

                            <Label>Sections:</Label>
                            <Input
                                type="number"
                                value={sections}
                                onChange={setSectionsHandler}>
                            </Input>

                            <Label>Location:</Label>
                            {/* <Input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}>
                            </Input> */}

                            <InputAutocomp setLocationHandler={setLocationHandler} />


                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={() => createButHandler()}>Create new Locom</Button>
                            {' '}
                            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                        </ModalFooter>

                    </Modal>
                </>
            }
        </div>
    )
}

export default LocomModal;