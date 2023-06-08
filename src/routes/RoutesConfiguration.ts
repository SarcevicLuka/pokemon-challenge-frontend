import GuessingGamePage from "../pages/GuessingGamePage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import PokedexPage from "../pages/PokedexPage";
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
	{ path: AvailableRoutes.Register, component: RegisterPage, visibility: RouteVisibility.LoggedOut },
	{ path: AvailableRoutes.GuessingGame, component: GuessingGamePage, visibility: RouteVisibility.LoggedIn },
	{ path: AvailableRoutes.Pokedex, component: PokedexPage, visibility: RouteVisibility.LoggedIn },
	{ path: "*", component: NotFoundPage, visibility: RouteVisibility.Everyone }
]

export default RouteConfiguration;
