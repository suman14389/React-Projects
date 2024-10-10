import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Body';
import Cart from './Cart';

function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
    {
      path: "/cart",
      element: <Cart />,
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
