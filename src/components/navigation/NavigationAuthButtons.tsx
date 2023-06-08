import { Button, Nav } from "react-bootstrap";

function NavigationAuthButtons() {
    return (
        <Nav>
            <Nav.Link href="/auth/login">
                Login
            </Nav.Link>
            <Button href="/auth/register" variant="outline-primary">
                Register
            </Button>
        </Nav>
    );
}

export default NavigationAuthButtons;