export default (state = [], action) => {
	switch (action.type) {
		case "MOVIES_FETCHED":
			return action.movies;

		case "CREATE_MOVIE":
			return [...state, action.movie];

		case "MOVIE_DELETE_BY_ID":
			return state.filter(movie => movie.id !== action.id);

		default:
			return state;
	}
};
