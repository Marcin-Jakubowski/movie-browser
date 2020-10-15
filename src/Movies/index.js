import React, { useEffect } from 'react';
import { useAPI } from "./useAPI";
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedPage, setSelectedPage } from './MoviesSlice';
import Pager from '../Common/Pager';


function Movies() {

  const dispatch = useDispatch()

  const page = useSelector(selectSelectedPage)

  useEffect(() => { dispatch(setSelectedPage("first")); }, [])

  const popularMovies = useAPI(page, "https://api.themoviedb.org/3/movie/popular?")

  return (
    <Container>
      <Header text={"Popular Movies"} />
      <GridTemplate
        content={popularMovies}
        type={"movies"}
      />
      <Pager />
    </Container>
  );
};

export default Movies;