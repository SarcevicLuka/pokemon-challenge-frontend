import { Accordion, Card, ListGroup } from "react-bootstrap";
import Navigation from "../components/navigation/Navigation";
import { useContext } from 'react';
import { AuthContext } from "../provider/AuthProvider";
import PlayButton from "../components/guessingGame/PlayButton";

function HomePage() {
    const { token } = useContext(AuthContext);

    return (<>
        <Navigation />
        { token && <PlayButton /> }
        <div className="d-flex justify-content-md-center text-center"
        >
            <Card style={{ width: '70%' }} className="my-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                <Card.Body>
                    <Card.Title>Guess The Pokemon</Card.Title>
                    <Card.Img variant="top" src="src/public/images/guess-the-pokemon.jpg" />
                </Card.Body>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How to play</Accordion.Header>
                        <Accordion.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Guess the pokemon and add it to your pokedex</ListGroup.Item>
                                <ListGroup.Item>You have 3 chances to get each pokemon</ListGroup.Item>
                                <ListGroup.Item>Search pokemon you have collected</ListGroup.Item>
                                <ListGroup.Item>Account must be created in order to play the game</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>
        </div>
    </>
    );
}

export default HomePage;