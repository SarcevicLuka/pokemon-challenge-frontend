import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form } from "react-bootstrap";
import { getGuessingGamePokemon, takeAGuess } from "../../api/guessingGame/apiCalls";
import Loader from "../Loader";
import guessThePokemon from "../../public/images/guess-the-pokemon.jpg";
import { getWholePokedex } from "../../api/pokedex/apiCalls";
import FinishGameModal from "./FinishGameModal";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import ErrorToast from "../ErrorToast";

export type GuessingGamePokemon = {
    guessId: string,
    image: string
}

const GuessingGame = () => {
    const [gameStarted, setGameStarted] = useState<boolean>(false);
    const [modalShow, setModalShow] = useState(false);
    const [pokemon, setPokemon] = useState<GuessingGamePokemon>();
    const [userGuess, setUserGuess] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isCorrect, setIsCorrect] = useState<boolean>(true);
    const [numOfCaughtPokemon, setNumOfCaughtPokemon] = useState<number>(0);
    const [numOfNewelyCaughtPokemon, setNumOfNewelyCaughtPokemon] = useState<number>(0);
    const [error, setError] = useState<string>("");
    const [requiredError, setRequiredError] = useState<string>("");
    const [guessesLeft, setGuessesLeft] = useState<number>(2);

    const navigation = useNavigate();

    const getPokemon = async (): Promise<void> => {
        setIsSubmitting(true);
        await getGuessingGamePokemon()
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data)
                    setPokemon(response.data)
                }
            })
            .catch((error) => {
                switch (error.response.status) {
                    case 400:
                        setError("Bad request")
                        break;
                    case 401:
                        setError("Not authorized")
                        break;
                    case 422:
                        setRequiredError("Required")
                        break;
                    default:
                        setError("Something went wrong")
                }
            })
            .finally(() => setIsSubmitting(false))
    }

    const handleSubmit = async (): Promise<void> => {
        setIsSubmitting(true);

        await takeAGuess({
            guessId: pokemon?.guessId,
            usersGuess: {
                guessName: userGuess
            }
        })
            .then((response) => {
                if (response.status == 200 && response.data.verdict === "correct") {
                    setIsCorrect(true);
                    setNumOfCaughtPokemon(numOfCaughtPokemon + 1)
                    setNumOfNewelyCaughtPokemon(numOfNewelyCaughtPokemon + 1)
                    getPokemon();
                    setGuessesLeft(2);
                } else {
                    if (guessesLeft > 0) {
                        setIsCorrect(false);
                        setGuessesLeft(prev => prev - 1)
                    } else {
                        getPokemon();
                        setGuessesLeft(2);
                    }
                }
            })
            .catch((error) => {
                switch (error.response.status) {
                    case 400:
                        setError("Bad request")
                        break;
                    case 401:
                        setError("Not authorized")
                        sessionStorage.removeItem("token")
                        navigation(AvailableRoutes.Home)
                        break;
                    case 422:
                        setRequiredError("Required")
                        break;
                    default:
                        setError("Something went wrong")
                }
            })
            .finally(() => setIsSubmitting(false))
    }

    const handleFinish = () => {
        setGameStarted(false);
        setModalShow(true);
    }

    useEffect(() => {
        getWholePokedex()
            .then((response) => {
                if (response.status === 200) {
                    setNumOfCaughtPokemon(response.data.data.length);
                }
            })
            .catch((_error) => {
                setError("Error while fetching pokedex");
            })
    }, [])

    return (
        <>
            { error && <ErrorToast errorMessage={error} /> }
            <div className="d-flex justify-content-center mt-5">
                {gameStarted ?
                    (
                        <Card 
                            style={{ width: '60%' }} 
                            className="shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                        >
                            <div className="d-flex justify-content-between">
                                <p>Pokedex progression: {numOfCaughtPokemon}/151 | New pokemon collected: {numOfNewelyCaughtPokemon}</p>
                                <p className={`${guessesLeft===0 && "text-danger"}`}>Guesses left: { guessesLeft }</p>
                            </div>
                            {pokemon?.image ?
                                (<Card.Img 
                                    variant="top" 
                                    src={pokemon.image} 
                                    className="h-60 w-50 mx-auto" 
                                />)
                                :
                                (<Loader />)
                            }
                            <Card.Body className="d-flex justify-content-center">
                                <Form style={{ width: '80%' }}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="userGuess"
                                            placeholder={requiredError ? "Name is required..." : "Take a guess..."}
                                            onChange={(e) => setUserGuess(e.target.value)}
                                            className={isCorrect ? "border border-success" : "border border-danger"} />
                                    </Form.Group>
                                    {!isCorrect && <p className="text-danger">Incorrect</p>}
                                    <div className="d-flex justify-content-around">
                                        <Button 
                                            variant="primary" 
                                            onClick={handleSubmit} 
                                            disabled={isSubmitting}
                                        >
                                            Take a guess
                                        </Button>
                                        <Button 
                                            variant="outline-warning" 
                                            onClick={getPokemon} 
                                            disabled={isSubmitting}
                                        >
                                            Skip
                                        </Button>
                                        <Button 
                                            variant="outline-danger" 
                                            onClick={handleFinish} 
                                            disabled={isSubmitting}
                                        >
                                            Finish
                                        </Button>
                                    </div>
                                </Form>
                            </Card.Body>
                        </Card>
                    )
                    :
                    (
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
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control
                                            type="userGuess"
                                            placeholder="Take a guess..."
                                            disabled />
                                    </Form.Group>
                                    <Button
                                        variant="warning"
                                        onClick={() => {
                                            setGameStarted(true);
                                            getPokemon();
                                        }}>
                                        <span>Let's play</span>
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    )
                }
            </div>

            <FinishGameModal 
                show={modalShow} 
                caughtPokemon={numOfNewelyCaughtPokemon} 
                onHide={() => setModalShow(false)} 
            />
        </>
    )
}

export default GuessingGame;