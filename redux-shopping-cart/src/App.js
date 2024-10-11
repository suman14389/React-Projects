import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './Body';
import Cart from './Cart';
import { Provider } from 'react-redux';
import store from './Utils/appStore';
import Header from './Header';
import { Outlet } from 'react-router-dom';

function App() {

  const AppLayout = () => {
    return <>
      <Header />
      <Outlet />
    </>
  }

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Body />
        },
        {
          path: "/cart",
          element: <Cart />
        }
      ]
    }
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  );
}

export default App;
