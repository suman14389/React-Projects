import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Body';
import Cart from './Cart';
import { Provider } from 'react-redux';
import store from './Utils/appStore';

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
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
