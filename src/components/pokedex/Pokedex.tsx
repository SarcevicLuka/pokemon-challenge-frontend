import { Button, Row } from "react-bootstrap";
import { getPaginatedPokedex } from "../../api/pokedex/apiCalls";
import PokedexFilter from "./PokedexFilter";
import { useState, useEffect } from "react";
import PokemonCard from "./PokemonCard";
import { PokedexPokemon } from "../../api/types";
import Loader from "../Loader";
import RightArrow from "../../public/RightArrow";
import LeftArrow from "../../public/LeftArrow";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import { useNavigate } from "react-router-dom";
import ErrorToast from "../ErrorToast";

const Pokedex = () => {
    const initialFilterState = "?page=1&perPage=8&sort=ASC";

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [paginatedPokemon, setPaginatedPokemon] = useState<PokedexPokemon[]>([]);
    const [filterParams, setFilterParams] = useState<URLSearchParams>(new URLSearchParams(initialFilterState));
    const [page, setPage] = useState<number>(1);
    const [lastPage, setLastPage] = useState<number>(1);
    const [error, setError] = useState<string>("");
    const navigation = useNavigate();

    const handleFilter = async (filterParams: URLSearchParams): Promise<void> => {
        setIsSubmitting(true);

        await getPaginatedPokedex(filterParams)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response)
                    setPaginatedPokemon(response.data.data)
                    setLastPage(response.data.lastPage)
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
                        setError("Required")
                        break;
                    default:
                        setError("Something went wrong")
                }
            })
            .finally(() => {
                setIsSubmitting(false)
            })
    }

    useEffect(() => {
        console.log("useEffect");
        console.log(page);
        filterParams.set("page", page.toString());

        handleFilter(filterParams);
    }, [page])

    return (<>
        { error && <ErrorToast errorMessage={error} /> }
        
        <PokedexFilter 
            setFilterParams={setFilterParams} 
            handleFilter={handleFilter}
            setPage={setPage} 
        />

        {isSubmitting ?
            (
                <Loader />
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
        <div className="d-flex justify-content-center">
            <Button
                className="m-2"
                variant="primary"
                disabled={page == 1}
                onClick={() => setPage(prev => prev - 1)}
            >
                <LeftArrow />
            </Button>
            <Button 
                variant="outline-primary"
                disabled 
                className="m-2"
            >
                Page: { page }
            </Button>
            <Button
                className="m-2"
                variant="primary"
                disabled={lastPage == page}
                onClick={() => setPage(prev => prev + 1)}
            >
                <RightArrow />
            </Button>
        </div>
    </>)
}

export default Pokedex;