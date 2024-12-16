export function MovieForm() {
	return (
		<div className="flex justify-center">
			<form className="flex w-2/3 flex-col bg-slate-200 p-2">
				<div className="text-2xl">Movie Form</div>
				<label htmlFor="form-title">Title: </label>
				<input id="form-title" type="text"></input>
				<label htmlFor="form-summary">Summary: </label>
				<input id="form-summary" type="text"></input>
				<label htmlFor="form-link">Link: </label>
				<input id="form-link" type="text"></input>
				<label htmlFor="form-rating">Rating</label>
				<select id="form-rating" className="w-12">
					<option>1</option>
					<option>2</option>
					<option>3</option>
					<option>4</option>
					<option>5</option>
				</select>
			</form>
		</div>
	);
}
