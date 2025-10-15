import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';


const AddToWatchlistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToWatchlist = (e) => {
    e.preventDefault();
    context.addToPlaylist(movie);
  };

  return (
    <PlaylistAddIcon aria-label="add to watchlist" onClick={handleAddToWatchlist}>
      <PlaylistAddIcon color="primary" fontSize="large" />
    </PlaylistAddIcon>
  );
};

export default AddToWatchlistIcon;
