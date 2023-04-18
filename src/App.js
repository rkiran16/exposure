/* eslint-disable no-undef */
import { Home } from './Pages/Home';
import { ProductDetails } from './Pages/ProductDetails';
import { Cart } from './Pages/Cart';
import { Orders } from './Pages/Orders';
import { Header } from './components/Header';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import User from './Pages/User';
import SearchPage from './Pages/SearchPage';
import Error from './Pages/Error';

const router = createBrowserRouter([
  {
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'pdp/:productId',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'user/:userName',
        element: <User />,
      },
      {
        path: 'search/:query',
        element: <SearchPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
