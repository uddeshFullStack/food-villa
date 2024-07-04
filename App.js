import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Shimmer } from './src/components/Shimmer';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';
import { Contacts } from './src/components/Contact';
import { Body } from './src/components/Body';
import { Error } from './src/components/Error';
import { RestaurantMenu } from './src/components/RestaurantMenu';
import Profile from './src/components/Profile';
import { Suspense, lazy } from 'react';
import UserContext from './src/utils/UserContext';
const About = lazy(() => import('./src/components/About'));
const Instamart = lazy(() => import('./src/components/Kinstamart'));
import store from './src/utils/store';
import { Provider } from 'react-redux';

const AppLayout = () => {
  const [user, setUser] = useState({
    name: 'app.js',
    email: 'app.js@gmail.com',
  });

  return (
    <Provider store={store}>
      <Header  />
      <UserContext.Provider value={{ user, setUser }}>
        <Outlet />
        <Footer />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '/restaurant/:id',
        element: <RestaurantMenu />,
      },
      {
        path: '/instamart',
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
