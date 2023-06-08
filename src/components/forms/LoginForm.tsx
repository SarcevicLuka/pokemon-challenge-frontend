import { useContext, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AvailableRoutes } from "../../routes/AvailableRoutes";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth/apiCalls";
import { AuthContext } from "../../provider/AuthProvider";

function LoginForm() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const { saveToken } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (): Promise<void> => {
        setIsSubmitting(true)

        await login({
            email: email,
            password: password
        })
            .then((response) => {
                console.log(response);
                if (saveToken) saveToken(response.headers["authorization"]);
                navigate(AvailableRoutes.Home)
            })
            .catch((error) => {
                switch (error.response.status) {
                    case 400:
                        setError("Bad request")
                        break;
                    case 403:
                        setError("Wrong e-mail or password")
                        break;
                    case 422:
                        setError("Email and password required")
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
                <h2 className="mb-3 text-center">Log In</h2>
                {error && <Alert variant="danger" className="text-center">{error}</Alert>}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="email"
                            placeholder="Email address"
                            onChange={(e) => setEmail(e.target.value)} />
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
                                    (<span>Log in</span>)
                            }
                        </Button>
                    </div>
                </Form>
                <hr />
            </div>
            <div className="p-4 box text-center">
                Don't have an account? <Link to={AvailableRoutes.Register}>Register</Link>
            </div>
        </>
    );
}

export default LoginForm;