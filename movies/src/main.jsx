import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes} from "react-router";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavoriteMoviesPage from "./pages/favoriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from './pages/addMovieReviewPage';
import UpcomingMoviesPage from './pages/upcomingMoviesPage';
import TrendingMoviesPage from './pages/trendingMoviesPage';
import TopRatedMoviesPage from './pages/topRatedMoviesPage';
import PopularMoviesPage from './pages/popularMoviesPage';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme } from "@mui/material/styles";
import { orange, amber} from "@mui/material/colors";  


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

  const Theme = createTheme({
    palette: {
      primary : {
        main: amber[600],
      },
      secondary: {
        main: orange[500],
      }
    }
  });




const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <SiteHeader/>
      <Alert severity="success"><CloseIcon></CloseIcon></Alert>
      <MoviesContextProvider>
      <Routes>
        <Route path="/movies/favorites" element={<FavoriteMoviesPage />} />
        <Route path="/movies/:id" element={<MoviePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={ <Navigate to="/" /> } />
        <Route path="/reviews/:id" element={ <MovieReviewPage /> } />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>}/>
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage/>} />
        <Route path="/movies/trending/today" element={<TrendingMoviesPage/>} />
        <Route path="/movies/top-rated" element={<TopRatedMoviesPage/>}/>
        <Route path="/movies/popular" element={<PopularMoviesPage/>}/>
      </Routes>
      </MoviesContextProvider>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot( document.getElementById("root") )
rootElement.render(<App />);

