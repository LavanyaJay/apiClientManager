import React from "react";

export default function MovieForm(props) {
	return (
		<div>
			<form onSubmit={event => props.onSubmit(event)}>
				<label>Title:</label>
				<input
					name="title"
					onChange={props.onChange}
					value={props.values.title}
				/>
				<label>Release:</label>
				<input
					name="yearOfRelease"
					onChange={props.onChange}
					value={props.values.yearOfRelease}
				/>
				<label>Synopsis:</label>
				<textarea
					name="synopsis"
					type="text"
					onChange={props.onChange}
					value={props.values.synopsis}
				></textarea>
				<input className="submitClass" type="submit" value="Add/Edit Movie" />
			</form>
		</div>
	);
}
