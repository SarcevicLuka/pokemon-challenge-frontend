import { useContext } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { AuthContext } from "../provider/AuthProvider";
import NavigationAuthButtons from "./NavigationAuthButtons";
import NavigationLoggedInButtons from "./NavigationLoggedInButtons";
import pokeball from "../public/images/pokeball.png";

function Navigation() {
    const { token } = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <Image src={pokeball} className="pokeball"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">
                            Home 
                        </Nav.Link>
                    </Nav>
                    { token ? <NavigationLoggedInButtons /> : <NavigationAuthButtons /> }   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;