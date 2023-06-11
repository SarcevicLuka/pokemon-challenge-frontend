import { Col, Row } from "react-bootstrap";
import { PokemonData } from "../../../api/types";

const DetailsTab = ({ pokemonDetails }: { pokemonDetails: PokemonData | undefined }) => {
    return (<>
        <Row>
            <Col>Base experience:</Col>
            <Col>{pokemonDetails?.baseExperience}</Col>
        </Row>
        <Row>
            <Col>Height:</Col>
            <Col>{pokemonDetails?.height}</Col>
        </Row>
        <Row>
            <Col>Weight</Col>
            <Col>{pokemonDetails?.weight}</Col>
        </Row>
        <Row>
            <Col>Caught:</Col>
            <Col>{pokemonDetails?.createdAt.slice(0, 10)}</Col>
        </Row>
    </>)
}

export default DetailsTab;