import { useState } from 'react';
import { insertMovie } from '../../lib/data';
import { useNavigate } from 'react-router-dom';

type FormMovie = {
	title: string;
	summary: string;
	link: string;
	rating: number;
};
export function MovieForm() {
	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');
	const [link, setLink] = useState('');
	const [rating, setRating] = useState(0);
	const navigate = useNavigate();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const data: FormMovie = { title, summary, link, rating };

		if (!title || !summary || !link || rating <= 0) {
			console.error('All fields must be filled out with valid values.');
			return;
		}
		try {
			await insertMovie(data);
		} catch (err) {
			console.error(err);
		}
		navigate('/');
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
					type="text"
					className="bg-white"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
				></input>
				<label htmlFor="form-summary">Summary: </label>
				<input
					id="form-summary"
					type="text"
					className="bg-white"
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
				></input>
				<label htmlFor="form-link">Link: </label>
				<input
					id="form-link"
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
