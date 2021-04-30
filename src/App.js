import { Route, Switch, BrowserRouter } from "react-router-dom";
import Chart from "./components/Chart";

import "./App.css";

// DEVELOPMENT
import Placeholder from "./Placeholder"

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Chart />
				</Route>
				<Route exact path={"/category/:category"}>
					<Placeholder /> 
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
