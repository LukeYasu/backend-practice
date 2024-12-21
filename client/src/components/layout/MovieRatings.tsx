import { useState } from 'react';
import { useEffect } from 'react';
import { Movie, deleteMovie, getMovies } from '../../lib/data';
import { useNavigate } from 'react-router-dom';

export function MovieRatings() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const navigate = useNavigate();

	useEffect(() => {
		async function fetchMovies() {
			try {
				const result = await getMovies();
				setMovies(result);
			} catch (err) {
				console.error(err);
			}
		}
		fetchMovies();
	});
	async function handleDelete(movieId: number) {
		try {
			deleteMovie(movieId);
		} catch (err) {
			console.error(err);
		}
	}
	const handleEdit = (movie: Movie) => {
		navigate('/edit-form', { state: movie });
	};
	return (
		<div>
			{movies.map((movie) => {
				return (
					<div className="flex w-screen justify-center" key={movie.movieId}>
						<div className="m-8 h-fit w-2/3 bg-slate-200">
							<div className="m-2 flex justify-between text-4xl">
								<div>{movie.title}</div>

								<button
									className="border-2 border-black p-2 text-sm"
									onClick={() => handleEdit(movie)}
								>
									Update
								</button>
							</div>
							<div className="m-2">{movie.summary}</div>
							<div className="m-2">{movie.link}</div>
							<div className="m-2">{movie.rating}</div>
							<button
								className="m-2 border-2 border-black p-2"
								onClick={() => handleDelete(movie.movieId)}
							>
								Delete
							</button>
						</div>
					</div>
				);
			})}
		</div>
	);
}
