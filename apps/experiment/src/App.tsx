import { createBrowserRouter, RouterProvider } from 'react-router';

import Playground from '@/components/Playground';
import LandingPage from '@/components/LandingPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/playground/:id',
    element: <Playground />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
