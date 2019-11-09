import request from "superagent";
export const MOVIES_FETCHED = "MOVIES_FETCHED";
export const CREATE_MOVIE = "CREATE_MOVIE";
export const MOVIE_FETCH_BY_ID = "MOVIE_FETCH_BY_ID";
export const MOVIE_UPDATE = "MOVIE_UPDATE";
export const MOVIE_DELETE_BY_ID = "MOVIE_DELETE_BY_ID";

const baseUrl = "http://localhost:3000";

const moviesFetched = movies => ({
	type: MOVIES_FETCHED,
	movies
});

export const loadMovies = () => (dispatch, getState) => {
	request(`${baseUrl}/movie`)
		.then(response => {
			dispatch(moviesFetched(response.body.movies));
		})
		.catch(console.error);
};

const createMovieAction = movie => ({
	type: CREATE_MOVIE,
	movie
});

export const createMovie = data => dispatch => {
	request
		.post(`${baseUrl}/movie`)
		.send(data)
		.then(response => {
			console.log("in action", response.body);
			dispatch(createMovieAction(response.body));
		})
		.catch(console.error);
};

const movieFetchById = movie => ({
	type: MOVIE_FETCH_BY_ID,
	movie
});

export const loadMovie = id => dispatch => {
	console.log("inaction: ", id);
	request(`${baseUrl}/movie/${id}`)
		.then(response => {
			console.log(response.body);
			dispatch(movieFetchById(response.body));
		})
		.catch(console.error);
};

const movieUpdateSuccess = movie => ({
	type: MOVIE_UPDATE,
	movie
});
export const updateMovie = (id, data) => dispatch => {
	request
		.patch(`${baseUrl}/movie/${id}`)
		.send({
			title: data.title,
			yearOfRelease: data.yearOfRelease,
			synopsis: data.synopsis
		})
		.then(response => {
			dispatch(movieUpdateSuccess(response.body));
		})
		.catch(console.error);
};

const movieDeleteSuccess = id => ({
	type: MOVIE_DELETE_BY_ID,
	id
});

export const deleteMovie = id => dispatch => {
	request
		.delete(`${baseUrl}/movie/${id}`)
		.send(id)
		.then(response => {
			dispatch(movieDeleteSuccess(id));
		})
		.catch(console.error);
};
