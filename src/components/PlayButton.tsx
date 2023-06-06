import { Button } from "react-bootstrap";
import PokeballIcon from "../public/PokeballIcon";

function PlayButton() {
    return (
        <div className="d-flex justify-content-center mt-3">
            <Button href="/guessing-game/guess" variant="warning" className="btn-lg btn-floating btn-primary pulse">
                <span><PokeballIcon /> Play</span>
            </Button>
        </div>
    )
};

export default PlayButton;