import { Badge, Row } from "react-bootstrap";
import { Stat } from "../../../api/types";

const AbilitiesTab = ({ pokemonAbilities }: { pokemonAbilities: Stat[] | undefined }) => {
    return (<>
        {pokemonAbilities?.map((ability) => {
            return (
                <Row className="m-3">
                    <Badge bg="secondary" className="py-2">{ability.name?.toUpperCase()}</Badge>
                </Row>
            )
        })}
    </>)
}

export default AbilitiesTab;