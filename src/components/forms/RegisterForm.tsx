import { useState, useContext } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import { useNavigate } from "react-router-dom";
import { register } from "../../api/auth/apiCalls";
import { AuthContext } from "../../provider/AuthProvider";

function RegisterForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [error, setError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    
    const { saveToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (): Promise<void> => {
        setIsSubmitting(true)

        await register({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: password
        })
            .then((response) => {
                if (saveToken) saveToken(response.headers["authorization"]);
                navigate(AvailableRoutes.Home)
            })
            .catch((error) => {
                console.log("Error: " + JSON.stringify(error.response.data))
                switch (error.response.status) {
                    case 400:
                        setError(error.response.data.cause)
                        break;
                    case 422:
                        if (error.response.data.errors.password?.errors &&
                            error.response.data.errors.password.errors == "Password too weak")
                            setError(error.response.data.errors.password.errors)
                        else
                            setError("All fields required")
                        break;
                    default:
                        setError("Something went wrong")
                }
            });

        setIsSubmitting(false)
    };

    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3 text-center">Create account</h2>
                {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formFirstName">
                        <Form.Control
                            type="text"
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formLastName">
                        <Form.Control
                            type="text"
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>

                    <div className="d-grid gap-2">
                        <Button variant="primary" onClick={handleSubmit} disabled={isSubmitting}>
                            {
                                isSubmitting ?
                                    (
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    )
                                    :
                                    (<span>Register</span>)
                            }
                        </Button>
                    </div>
                </Form>
                <hr />
            </div>
            <div className="p-4 box text-center">
                Already have an account? <Link to={AvailableRoutes.Login}>Log in</Link>
            </div>
        </>
    );
}

export default RegisterForm;