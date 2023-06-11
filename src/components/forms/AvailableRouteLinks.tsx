import { Link } from "react-router-dom";
import { AvailableRoutes } from "../../routes/AvailableRoutes";

interface AvailableRouteLinksProps {
    route: string;
    text: string;
}
const AvailableRouteLinks = ({ route, text }: AvailableRouteLinksProps) => {
    return (<>
        <div className="p-1 box text-center">
            Return <Link to={AvailableRoutes.Home}>home</Link>
        </div>
        <div className="box text-center">
            Already have an account? <Link to={route}>{ text }</Link>
        </div>
    </>)
}

export default AvailableRouteLinks;