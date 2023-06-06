import { useContext, useEffect } from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { AuthContext } from "../provider/AuthProvider";
import NavigationAuthButtons from "./NavigationAuthButtons";
import NavigationLoggedInButtons from "./NavigationLoggedInButtons";

function Navigation() {
    const { token } = useContext(AuthContext);

    useEffect(() => {
        console.log(token);
    }, [token])

    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand>
                    <Image src="src/public/images/pokeball.png" className="pokeball"/>
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