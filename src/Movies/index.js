import React from 'react';
import { usePopularMovies } from "./usePopularMovies"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useSelector } from 'react-redux';
import { selectSelectedPage } from './MoviesSlice';
import Pager from '../Common/Pager';


function Movies() {

  const page = useSelector(selectSelectedPage)

  const popularMovies = usePopularMovies(page)

  return (
    <Container>
      <Header text={"Popular Movies"} />
      <GridTemplate content={popularMovies} />
      <Pager/>
    </Container>
  );
};

export default Movies;