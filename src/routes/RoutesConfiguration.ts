import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import { AvailableRoutes } from "./AvailableRoutes";
import { RouteVisibility } from "./RouteVisibility";

type RouteInformation = {
	path: string;
	component: () => JSX.Element | null;
	visibility: RouteVisibility;
};

const RouteConfiguration: RouteInformation[] = [
	{ path: AvailableRoutes.Home, component: HomePage, visibility: RouteVisibility.Everyone },
	{ path: AvailableRoutes.Login, component: LoginPage, visibility: RouteVisibility.LoggedOut },
	{ path: AvailableRoutes.Register, component: RegisterPage, visibility: RouteVisibility.LoggedOut }
]

export default RouteConfiguration;
