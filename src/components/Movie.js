import React from "react";
import { useParams } from "react-router-dom";

// config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";

// components
import Grid from "./Grid";
import Spinner from "./Spinner";

// Hook
import { useMoiveFetch } from "../hooks/useMovieFetch";

// Image
import NoImage from "../images/no_image.jpg";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMoiveFetch(movieId);

  console.log(movie);
  return (
    <>
      <div>Movie</div>
    </>
  );
};

export default Movie;
