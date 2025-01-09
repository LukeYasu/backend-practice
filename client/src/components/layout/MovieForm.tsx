import { insertMovie } from '../../lib/data';
import { useNavigate } from 'react-router-dom';

type FormMovie = {
	title: string;
	summary: string;
	link: string;
	rating: number;
};
export function MovieForm() {
	const navigate = useNavigate();

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const formData = new FormData(e.target as HTMLFormElement);
		const payload = Object.fromEntries(formData) as unknown as FormMovie;

		if (
			!payload.title ||
			!payload.summary ||
			!payload.link ||
			Number(payload.rating) <= 0
		) {
			console.error('All fields must be filled out with valid values.');
			return;
		}

		payload.rating = Number(payload.rating);
		try {
			await insertMovie(payload);
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
					name="title"
					type="text"
					className="bg-white"
				></input>
				<label htmlFor="form-summary">Summary: </label>
				<input
					id="form-summary"
					name="summary"
					type="text"
					className="bg-white"
				></input>
				<label htmlFor="form-link">Link: </label>
				<input
					id="form-link"
					name="link"
					type="text"
					className="bg-white"
				></input>
				<label htmlFor="form-rating">Rating</label>
				<select id="form-rating" name="rating" className="w-24 bg-white">
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
