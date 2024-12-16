import { Link, Outlet } from 'react-router-dom';

export function Header() {
	return (
		<div>
			<div className="flex h-20 w-screen items-center justify-between bg-black p-2 text-white">
				<Link to={'/'}>
					<div>RateMyM0v1e.com</div>
				</Link>
				<Link to={'/movie-form'}>
					<div className="m-2">Create Movie Entry</div>
				</Link>
			</div>
			<Outlet />
		</div>
	);
}
