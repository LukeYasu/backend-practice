export function MovieRatings() {
	return (
		<div className="flex w-screen justify-center">
			<div className="m-8 h-fit w-2/3 bg-slate-200">
				<div className="m-2 flex justify-between text-4xl">
					<div>Title</div>
					<button className="border-2 border-black p-2 text-sm">Update</button>
				</div>
				<div className="m-2">Summary</div>
				<div className="m-2">Link</div>
				<div className="m-2">Rating: * * * * *</div>
				<button className="m-2 border-2 border-black p-2">Delete</button>
			</div>
		</div>
	);
}
