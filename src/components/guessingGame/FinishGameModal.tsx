import { Container, Modal } from "react-bootstrap";
import { AvailableRoutes } from "../../routes/AvailableRoutes";

interface ModalProps {
    show: boolean;
    caughtPokemon: number;
    onHide: () => void;
}

const FinishGameModal = ({ show, caughtPokemon, onHide }: ModalProps) => {
    return (<>
        <Modal 
            show={show} 
            onHide={onHide} 
            aria-labelledby="contained-modal-title-vcenter"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Game finished...see your cought pokemon
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <Container>
                    {caughtPokemon === 0 ?
                        (
                            <>
                                <p>You collected 0 pokemon</p>
                                <p>Give it another try...</p>
                            </>
                        )
                        :
                        (
                            <>
                                <p>Congrats, you collected {caughtPokemon} Pokemon.</p>
                                <p>
                                    Go to your <a href={AvailableRoutes.Home}>pokedex</a> to see newely caught Pokemon
                                </p>
                            </>
                        )
                    }
                </Container>
            </Modal.Body>
        </Modal>
    </>)
}

export default FinishGameModal;