import React, { Component } from "react";
import Router from "Components/Router";
import GlobalStyles from "Components/GlobalStyles";
import Helmet from "react-helmet";

class App extends Component {
	render() {
		return (
			<>	
				<Helmet>
					<title>Cinema_j</title>
				</Helmet>
				<Router />
				<GlobalStyles />
			</>
		);
	}
}

export default App;
