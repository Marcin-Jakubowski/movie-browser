import React, { useEffect } from 'react';
import { useAPI } from "./useAPI"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedPage, setSelectedPage } from './MoviesSlice';
import Pager from '../Common/Pager';
import { useSearch } from './useSearch';
import useQueryParameter from '../useQueryParameter';


function Movies() {

  const dispatch = useDispatch()
  const query = useQueryParameter()

  const page = useSelector(selectSelectedPage)
  useEffect(() => { dispatch(setSelectedPage("first")) }, [])

  const popularMovies = useAPI(page, "https://api.themoviedb.org/3/movie/popular?")
  const searchResults = useSearch(page, "https://api.themoviedb.org/3/search/movie?")

  return (
    <Container>
      <Header text={query ? `Search results for "${query}"` : "Popular Movies"} />
      <GridTemplate
        content={query ? searchResults : popularMovies}
        type={"movies"}
      />
      <Pager />
    </Container>
  );
};

export default Movies;