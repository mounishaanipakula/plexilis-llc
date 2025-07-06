import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import ErrorBoundary from '../components/error/ErrorBoundary';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Lazy load pages for better performance
const Home = lazy(() => {
  // Simulate loading delay for demo purposes
  return Promise.all([
    import('../pages/Home'),
    new Promise(resolve => setTimeout(resolve, 300)) // Small delay to show loading state
  ]).then(([moduleExports]) => moduleExports);
});

const About = lazy(() => import('../pages/About'));
const NotFound = lazy(() => import('../pages/NotFound'));


// Create the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner message="Loading home page..." />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<LoadingSpinner message="Loading about page..." />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
]);

// Router provider component
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
