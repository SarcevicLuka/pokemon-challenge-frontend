import { Button, Card, Form } from "react-bootstrap";
import guessThePokemon from "../public/images/guess-the-pokemon.jpg";

const DisabledGuessingGameCard = () => {
    return (
        <Card 
            style={{ width: '60%' }} 
            className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
        >
            <Card.Img 
                variant="top" 
                src={guessThePokemon} 
                className="h-60 w-50 mx-auto" 
            />
            <Card.Body className="d-flex justify-content-center">
                <Form style={{ width: '80%' }}>
                    <Form.Group 
                        className="mb-3" 
                        controlId="formBasicEmail"
                    >
                        <Form.Control
                            type="userGuess"
                            placeholder="Take a guess..."
                            disabled />
                    </Form.Group>
                    <Button variant="warning">
                        <span>Let's play</span>
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default DisabledGuessingGameCard;