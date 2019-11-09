import React from "react";
import { connect } from "react-redux";
import { createMovie } from "../actions/movies";
import MovieForm from "./MovieForm";

class CreateEventFormContainer extends React.Component {
	state = {
		title: "",
		yearOfRelease: "",
		synopsis: ""
	};

	onChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	onSubmit = event => {
		event.preventDefault();
		this.props.createMovie(this.state);
		this.setState({
			title: "",
			yearOfRelease: "",
			synopsis: ""
		});
	};

	render() {
		return (
			<MovieForm
				onSubmit={this.onSubmit}
				onChange={this.onChange}
				values={this.state}
			/>
		);
	}
}

export default connect(
	null,
	{ createMovie }
)(CreateEventFormContainer);
