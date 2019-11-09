import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieForm from "./MovieForm";
import "../App.css";

export default function MovieDetails(props) {
	console.log(props);
	if (props.editMode) {
		return (
			<div className="movieForm">
				<MovieForm
					onSubmit={props.onSubmit}
					onChange={props.onChange}
					values={props.formValues}
				/>
			</div>
		);
	}

	return (
		<div className="detailsContainer">
			<div className="details">
				<h1>{props.movie.title}</h1>
				<p>YearOfRelease: {props.movie.yearOfRelease}</p>
				<p>Synopsis: {props.movie.synopsis}</p>
				<button
					onClick={() => {
						props.onDelete();
					}}
				>
					Delete
				</button>
				<button
					onClick={() => {
						props.onEdit();
					}}
				>
					Edit
				</button>
				<p>
					<Link className="content" to={"/"}>
						Back to Home
					</Link>
				</p>
			</div>
		</div>
	);
}
