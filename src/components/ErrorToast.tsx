import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap"

interface ErrorProps {
    errorMessage: string;
}

const ErrorToast = ({ errorMessage }: ErrorProps) => {
    const [show, setShow] = useState(true);

    return (<>
        <ToastContainer position="top-end">
            <Toast bg="danger" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{errorMessage}</Toast.Body>
            </Toast>
        </ToastContainer>
    </>)
}

export default ErrorToast;