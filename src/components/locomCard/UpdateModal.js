import { Button, Modal, ModalHeader, Label, ModalBody, Input, ModalFooter } from "reactstrap";
import { useState } from "react";

const UpdateModal = (props) => {

    const [name, setName] = useState(props.card.name)
    const [series, setSeries] = useState(props.card.series)
    const [sections, setSections] = useState(props.card.numberOfSections)
    const [location, setLocation] = useState(props.card.coordinates)
    const [isOpen, setIsOpen] = useState(false);

    const saveButHandler = () => {
        // console.log(props.card.id)
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
        <div>

            {!isOpen && <button onClick={() => setIsOpen(true)} >Update</button>}

            {isOpen &&
                <>
                    <Modal isOpen={isOpen}>
                        <ModalHeader>
                            Change data
                        </ModalHeader>

                        <ModalBody>
                            <Label>New name:</Label>
                            <Input
                                // placeholder="type new name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />

                            <Label>New series:</Label>
                            <Input
                                type="text"
                                value={series}
                                onChange={(e) => setSeries(e.target.value)}>
                            </Input>

                            <Label>Number of sections:</Label>
                            <Input
                                type="number"
                                value={sections}
                                onChange={(e) => setSections(e.target.value)}>
                            </Input>

                            <Label>Location:</Label>
                            <Input
                                type="text"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}>
                            </Input>

                        </ModalBody>

                        <ModalFooter>
                            <Button color="primary" onClick={saveButHandler}>Update Locom</Button>
                            {' '}
                            <Button onClick={() => setIsOpen(false)}>Cancel</Button>
                        </ModalFooter>

                    </Modal>
                </>
            }
        </div>

    )
}

export default UpdateModal;