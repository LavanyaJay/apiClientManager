import React from "react";
import { connect } from "react-redux";
import MovieDetails from "./MovieDetails";
import { loadMovie, updateMovie, deleteMovie } from "../actions/movies";

class MovieDetailsContainer extends React.Component {
	state = { editMode: false };

	onEdit = movie => {
		this.setState({
			editMode: true,
			formValues: {
				title: this.props.movie.title,
				yearOfRelease: this.props.movie.yearOfRelease,
				synopsis: this.props.movie.synopsis
			}
		});
	};

	onChange = event => {
		this.setState({
			formValues: {
				...this.state.formValues,
				[event.target.name]: event.target.value
			}
		});
	};

	onSubmit = event => {
		event.preventDefault();
		this.setState({
			editMode: false
		});
		this.props.updateMovie(this.props.movie.id, this.state.formValues);
		console.log("Iam back");
	};

	onDelete = event => {
		console.log("inside onDelete");
		this.props.deleteMovie(this.props.movie.id);
		this.props.history.push("/");
	};

	componentDidMount() {
		this.props.loadMovie(Number(this.props.match.params.id));
	}

	render() {
		return (
			<MovieDetails
				movie={this.props.movie}
				onEdit={this.onEdit}
				onDelete={this.onDelete}
				onChange={this.onChange}
				onSubmit={this.onSubmit}
				formValues={this.state.formValues}
				editMode={this.state.editMode}
			/>
		);
	}
}

const mapStateToProps = state => ({
	movie: state.movie
});

export default connect(
	mapStateToProps,
	{ loadMovie, updateMovie, deleteMovie }
)(MovieDetailsContainer);
