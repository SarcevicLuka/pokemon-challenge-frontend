import { Container } from "react-bootstrap";
import RegisterForm from "../components/forms/RegisterForm";

function LoginPage () {
    return (
        <Container style={{ maxWidth: "400px" }}>
            <RegisterForm />
        </Container>
    );
}

export default LoginPage ;