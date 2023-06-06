import { Container } from "react-bootstrap";
import LoginForm from "../components/forms/LoginForm";

function LoginPage () {
    return (
        <Container style={{ maxWidth: "400px" }}>
            <LoginForm />
        </Container>
    );
}

export default LoginPage ;