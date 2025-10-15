import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../components/spinner';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import AddToWatchlistIcon from "../components/cardIcons/addToWatchlist";

const upcomingPage = (props) => {
const { data, error, isPending, isError  } = useQuery({
    queryKey: ['upcoming'],
    queryFn: getUpcomingMovies,
  })  
  
  if (isPending) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  

    const movies = data.results;

    return( <PageTemplate
            title='Discover Movies'
            movies={movies}
                  action={(movie) => {
                    return(
                        <AddToWatchlistIcon movies={movie}/>
                    )
                    
                  }}
            >

    </PageTemplate>

    );

};

export default upcomingPage;