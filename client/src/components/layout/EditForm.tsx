import { useState } from 'react';
import { Movie, updateMovie } from '../../lib/data';
import { useLocation, useNavigate } from 'react-router-dom';

export function EditForm() {
	const location = useLocation();
	const prePop = location.state as Movie;
	const movieId = prePop.movieId;
	const [title, setTitle] = useState(prePop.title);
	const [summary, setSummary] = useState(prePop.summary);
	const [link, setLink] = useState(prePop.link);
	const [rating, setRating] = useState(prePop.rating);
	const navigate = useNavigate();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data: Movie = { movieId, title, summary, link, rating };

		if (!title || !summary || !link || rating <= 0) {
			console.error('All fields must be filled out with valid values.');
			return;
		}
		try {
			await updateMovie(data);
			navigate('/');
		} catch (err) {
			console.error(err);
		}
	}
	return (
		<div className="flex h-screen justify-center">
			<form
				className="flex h-1/2 w-2/3 flex-col bg-slate-200 p-2"
				onSubmit={(e) => handleSubmit(e)}
			>
				<div className="text-2xl">Movie Form</div>
				<label htmlFor="form-title">Title: </label>
				<input
					id="form-title"
					name="title"
					type="text"
					className="bg-white"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<label htmlFor="form-summary">Summary: </label>
				<input
					id="form-summary"
					name="summary"
					type="text"
					className="bg-white"
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
				></input>
				<label htmlFor="form-link">Link: </label>
				<input
					id="form-link"
					name="link"
					type="text"
					className="bg-white"
					value={link}
					onChange={(e) => {
						setLink(e.target.value);
					}}
				></input>
				<label htmlFor="form-rating">Rating</label>
				<select
					id="form-rating"
					name="rating"
					className="w-12 bg-white"
					value={rating}
					onChange={(e) => setRating(Number(e.target.value))}
				>
					<option value={0}>Select</option>
					<option value={1}>1</option>
					<option value={2}>2</option>
					<option value={3}>3</option>
					<option value={4}>4</option>
					<option value={5}>5</option>
				</select>
				<button type="submit" className="mt-2 w-24">
					Submit
				</button>
			</form>
		</div>
	);
}
