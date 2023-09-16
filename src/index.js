import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './css/main.css';
import MovieScreenTemplate from './template/moviescreen'
import App from './App';
import ErrorPage from './routes/error-page';
import reportWebVitals from './reportWebVitals';
import MovieDetail from './routes/movieDetail';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/:home",
        element: <App />,
      }
    ],
  },
  {
    path: "/movies",
    element: <MovieScreenTemplate/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":movieId",
        element: <MovieDetail />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
reportWebVitals();
