import { MovieRatings } from './MovieRatings';

export function HomePage() {
	return (
		<div className="h-screen">
			<MovieRatings />
			<MovieRatings />
			<MovieRatings />
		</div>
	);
}