import { Toast } from "react-bootstrap"

interface ErrorProps {
    errorMessage: string;
}

const ErrorToast = ({errorMessage}: ErrorProps) => {
    return (<>
        <Toast>
            <Toast.Header>
                <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                <strong className="me-auto">Error</strong>
            </Toast.Header>
            <Toast.Body>{ errorMessage }</Toast.Body>
        </Toast>
    </>)
}

export default ErrorToast;