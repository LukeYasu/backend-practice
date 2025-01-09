export type Movie = {
	movieId: number;
	title: string;
	summary: string;
	link: string;
	rating: number;
};
type FormMovie = {
	title: string;
	summary: string;
	link: string;
	rating: number;
};

export async function getMovies(): Promise<Movie[]> {
	const response = await fetch('/api/movies');
	if (!response.ok) throw new Error(`response status: ${response.status}`);
	const movies = await response.json();
	return movies;
}

export async function getMovie(movieId: number): Promise<Movie> {
	const response = await fetch(`/api/movies/${movieId}`);
	if (!response.ok) throw new Error(`response status: ${response.status}`);
	const movie = await response.json();
	return movie;
}

export async function insertMovie(movie: FormMovie) {
	const req = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movie),
	};
	const res = await fetch(`/api/movie/`, req);
	if (!res.ok) throw new Error(`Fetch Error ${res.status}`);
	return await res.json();
}

export async function updateMovie(movie: Movie) {
	const req = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(movie),
	};
	const res = await fetch(`/api/movie/${movie.movieId}`, req);
	if (!res.ok) throw new Error(`Fetch Error ${res.status}`);
	return await res.json();
}

export async function deleteMovie(movieId: number) {
	const req = {
		method: 'DELETE',
		headers: {
			'Content-Type': 'application/json',
		},
	};
	const res = await fetch(`/api/movies/${movieId}`, req);
	if (!res.ok) throw new Error(`fetch Error ${res.status}`);
}
