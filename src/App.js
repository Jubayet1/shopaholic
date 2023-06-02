import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Main from './layout/Main';
import Home from './pages/Home/Home';
import Basket from './pages/Basket/Basket';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/basket',
          element: <Basket />
        }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
