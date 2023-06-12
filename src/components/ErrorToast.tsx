import { useState } from "react";
import { Toast, ToastContainer } from "react-bootstrap"

interface ErrorProps {
    errorMessage: string;
}

const ErrorToast = ({ errorMessage }: ErrorProps) => {
    const [show, setShow] = useState(true);

    return (<>
        <ToastContainer position="top-end">
            <Toast 
                bg="danger" 
                show={show} 
                delay={3000} 
                autohide 
                onClose={() => setShow(false)}
            >
                <Toast.Header>
                    <strong className="me-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{ errorMessage }</Toast.Body>
            </Toast>
        </ToastContainer>
    </>)
}

export default ErrorToast;