import React, { Component } from "react";
import { loadMovies } from "../actions/movies";
import { connect } from "react-redux";
import MoviesList from "./MoviesList";
import CreateMovieFormContainer from "./CreateMovieFormContainer";

class MovieListContainer extends Component {
	componentDidMount() {
		this.props.loadMovies();
	}

	render() {
		return (
			<div>
				<CreateMovieFormContainer />
				<MoviesList movies={this.props.movies} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	console.log("Moviecontainer: ", state.movies);
	return { movies: state.movies };
};

export default connect(
	mapStateToProps,
	{ loadMovies }
)(MovieListContainer);
