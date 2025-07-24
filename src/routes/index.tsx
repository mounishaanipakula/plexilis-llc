import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';
import { PageLayout } from '../App';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Helper function for lazy loading with delay
const lazyLoad = (componentImport: any) =>
  lazy(() =>
    Promise.all([
      componentImport,
      new Promise((resolve) => setTimeout(resolve, 200)), // Small delay for better UX
    ]).then(([moduleExports]) => moduleExports)
  );

// Import pages
import Home from '../pages/Home';
import About from '../pages/About';
import Products from '../pages/Products';
import ITSolutions from '../pages/ITSolutions';
import Contact from '../pages/Contact';

// Lazy load other pages
const TechAdvisory = lazyLoad(Promise.resolve({ default: () => <PageLayout title="Tech Advisory" /> }));
const Careers = lazyLoad(Promise.resolve({ default: () => <PageLayout title="Careers" /> }));
const Blog = lazyLoad(Promise.resolve({ default: () => <PageLayout title="Blog" /> }));
const NotFound = lazyLoad(Promise.resolve({ default: () => <PageLayout title="Page Not Found" /> }));

// Create the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { 
        index: true, 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ) 
      },
      { 
        path: 'our-company', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        ) 
      },
      { 
        path: 'products', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Products />
          </Suspense>
        ) 
      },
      { 
        path: 'it-solutions', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <ITSolutions />
          </Suspense>
        ) 
      },
      { 
        path: 'tech-advisory', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <TechAdvisory />
          </Suspense>
        ) 
      },
      { 
        path: 'careers', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Careers />
          </Suspense>
        ) 
      },
      { 
        path: 'blog', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Blog />
          </Suspense>
        ) 
      },
      { 
        path: 'contact', 
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        ) 
      },
    ],
  },
]);

// Router provider component
const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
