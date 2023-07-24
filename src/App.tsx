import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TaskDetail from './pages/TaskDetail';
import Tasks from './pages/Tasks';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Tasks />,
		},
		{
			path: '/tasks/:id',
			element: <TaskDetail />,
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
