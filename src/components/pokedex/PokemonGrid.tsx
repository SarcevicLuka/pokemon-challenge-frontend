import { Row } from "react-bootstrap";
import { PokedexPokemon } from "../../api/types";
import PokemonCard from "./PokemonCard";
import NoResultsMessage from "../NoResultsMessage";

interface PokemonGridProps {
    paginatedPokemon: PokedexPokemon[];
}

const PokemonGrid = ({ paginatedPokemon }: PokemonGridProps) => {
    return (<>
        {paginatedPokemon.length === 0
            ?
            (
                <NoResultsMessage />
            )
            :
            (
                <Row xs={1} md={3} lg={4} xxl={5} className="g-4 m-3">
                    {paginatedPokemon.map((pokemon, idx) => (
                        <PokemonCard idx={idx} key={pokemon.id} pokemon={pokemon} />
                    ))}
                </Row>
            )
        }
    </>)
}

export default PokemonGrid;