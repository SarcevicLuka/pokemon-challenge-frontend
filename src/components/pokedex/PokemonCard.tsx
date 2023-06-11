import { Card, Col } from "react-bootstrap";
import { PokedexPokemon } from "../../api/types";
import PokemonDetails from "./PokemonDetails";
import { useState } from "react";

interface PokemonCardProps {
    idx: number,
    pokemon: PokedexPokemon
}

const PokemonCard = ({ idx, pokemon }: PokemonCardProps) => {
    const [show, setShow] = useState<boolean>(false);
    const handleShow = () => setShow(true);

    return (<>
        <Col key={idx}>
            <a onClick={handleShow}>
                <Card className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
                    <Card.Img variant="top" src={pokemon.image} />
                    <Card.Body className="d-flex justify-content-center">
                        <Card.Title>{pokemon.name?.toUpperCase()}</Card.Title>
                    </Card.Body>
                </Card>
            </a>
        </Col>
        <PokemonDetails key={pokemon.id} setShow={setShow} show={show} id={pokemon.id}/>
    </>)
}

export default PokemonCard;