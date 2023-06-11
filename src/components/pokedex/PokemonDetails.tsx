import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Ability, PokemonData, Stat } from '../../api/types';
import { getPokemonDetails } from '../../api/pokemon/apiCalls';
import Loader from '../Loader';
import { Figure, Tab, Tabs } from 'react-bootstrap';
import DetailsTab from './pokemonDetailsTabs/DetailsTab';
import StatsTab from './pokemonDetailsTabs/StatsTab';
import AbilitiesTab from './pokemonDetailsTabs/AbilitiesTab';

interface PokemonDetailsProps {
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
    show: boolean;
    id: string | undefined;
}

const PokemonDetails = ({ setShow, show, id }: PokemonDetailsProps) => {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonData>();
    const [pokemonAbilities, setPokemonAbilities] = useState<Ability[]>([]);
    const [pokemonStats, setPokemonStats] = useState<Stat[]>([]);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleClose = () => setShow(false);

    useEffect(() => {
        setIsSubmitting(true);

        getPokemonDetails(id)
            .then((response) => {
                if (response.status === 200) {
                    setPokemonDetails(response.data)
                    setPokemonStats(response.data.stats)
                    setPokemonAbilities(response.data.abilities)
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsSubmitting(false))
    }, [])


    return (
        <>
            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{pokemonDetails?.name?.toUpperCase()} details:</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {isSubmitting ?
                        (
                            <Loader />
                        )
                        :
                        (
                            <>
                                <Figure className="d-flex justify-content-center">
                                    <Figure.Image
                                        height={200}
                                        width={200}
                                        alt={pokemonDetails?.name}
                                        src={pokemonDetails?.image}
                                    />
                                </Figure>
                                <Tabs
                                    defaultActiveKey="pokemonDetails"
                                    id="pokemon-details-tabs"
                                    className="mb-3"
                                >
                                    <Tab eventKey="pokemonDetails" title="Details">
                                        <DetailsTab pokemonDetails={pokemonDetails} />
                                    </Tab>
                                    <Tab eventKey="stats" title="Stats">
                                        <StatsTab pokemonStats={pokemonStats} />
                                    </Tab>
                                    <Tab eventKey="abilities" title="Abilities">
                                        <AbilitiesTab pokemonAbilities={pokemonAbilities} />
                                    </Tab>
                                </Tabs>
                            </>
                        )
                    }
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default PokemonDetails;