import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function MovieList(props) {
	if (props.movies.length > 0) {
		return (
			<div className="movieList">
				<h1>List of movies</h1>

				{props.movies.map(movie => {
					return (
						<div>
							<p>
								<Link className="content" to={`/movie/${movie.id}`}>
									{movie.title}
								</Link>
							</p>
						</div>
					);
				})}
			</div>
		);
	} else {
		return <div>loading....</div>;
	}
}
