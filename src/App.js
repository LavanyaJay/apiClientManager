import React, { Component } from "react";
import store from "./store";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import MoviesListContainer from "./components/MovieListContainer";
import MovieDetailsContainer from "./components/MovieDetailsContainer";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Route path="/" exact component={MoviesListContainer} />
					<Route path="/movie/:id" component={MovieDetailsContainer} />
				</div>
			</Provider>
		);
	}
}

export default App;
