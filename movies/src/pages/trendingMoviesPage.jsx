import React from "react";
import { getTrendingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";


const trendingPage = (props) => {
const { data, error, isPending, isError  } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingMovies,
  })  
  
  if (isPending) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  

    const movies = data.results;


    return( <PageTemplate
            title='Trending Movies'
            movies={movies}
                  action={(movie) => {
                    return <AddToWatchlistIcon movie={movie}/>
                    
                       
                    
                    
                  }}
            >

    </PageTemplate>

    );

};

export default trendingPage;