import React from "react";
import { Route } from "react-router-dom";
import MoviesList from "./MoviesList,js";
import MovieShow from "./MovieShow";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function MoviesPage({ movies }) {
  const match = useRouteMatch();
  console.log(match);
  return (
    <div>
      <MoviesList movies={movies} />
      <Route path={`${match.url}/:movieId`}>
        <MovieShow movies={movies} /> 
      </Route>
    </div>
  );
}
export default MoviesPage;
