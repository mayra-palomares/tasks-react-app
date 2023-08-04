import './styles/global.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import EditTask from './pages/EditTask';
import Tasks from './pages/Tasks';
import CreateTask from './pages/CreateTask';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Tasks />,
		},
		{
			path: '/tasks/create',
			element: <CreateTask />,
		},
		{
			path: '/tasks/:id',
			element: <EditTask />,
		},
	]);

	return (
		<div className="container">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
