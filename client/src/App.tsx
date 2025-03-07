import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/layout/HomePage';
import { MovieForm } from './components/layout/MovieForm';
import { Header } from './components/layout/Header';
import { NotFound } from './components/layout/NotFound';
import { EditForm } from './components/layout/EditForm';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Header />}>
				<Route index element={<HomePage />} />
				<Route path="movie-form" element={<MovieForm />} />
				<Route path='edit-form' element={<EditForm />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
}

export default App;
