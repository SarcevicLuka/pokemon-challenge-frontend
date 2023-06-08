import { Button, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

function NavigationLoggedInButtons() {
    const { saveToken } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <Nav>
            <Nav.Link onClick={() => {
                if (saveToken) saveToken();
                navigate(AvailableRoutes.Home);
            }}>
                Logout
            </Nav.Link>
            <Button href="/user/pokedex" variant="outline-primary">
                Pokedex
            </Button>
        </Nav>
    );
}

export default NavigationLoggedInButtons;