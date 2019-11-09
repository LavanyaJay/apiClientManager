export default (state = [], action) => {
	switch (action.type) {
		case "MOVIE_FETCH_BY_ID":
			return action.movie;

		case "MOVIE_UPDATE":
			return action.movie;

		default:
			return state;
	}
};
