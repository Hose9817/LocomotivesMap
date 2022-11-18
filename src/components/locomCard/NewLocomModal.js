import { Button, Modal, ModalHeader, Label, ModalBody, Input, ModalFooter } from "reactstrap";
import { useState } from "react";
import InputAutocomp from "../locomOnMap/InputAutocomp";

function LocomModal(props) {

    const [name, setName] = useState('');
    const [series, setSeries] = useState('')
    const [sections, setSections] = useState('')
    const [location, setLocation] = useState('')
    const [isOpen, setIsOpen] = useState(false)


    const createButHandler = () => {
        props.addNewCard(name, series, sections, location);
        setName('');
        setSeries('')
        setSections('')
        setLocation('')
        setIsOpen(false)
    };


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
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Label>Series:</Label>
                            <Input
                                type="text"
                                value={series}
                                onChange={(e) => setSeries(e.target.value)}>
                            </Input>

                            <Label>Sections:</Label>
                            <Input
                                type="number"
                                value={sections}
                                onChange={(e) => setSections(e.target.value)}>
                            </Input>

                            <Label>Location:</Label>
                            {/* <Input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}>
                            </Input> */}

                            <InputAutocomp />


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