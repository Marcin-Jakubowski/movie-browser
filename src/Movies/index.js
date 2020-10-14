import React, { useEffect } from 'react';
import { usePopular } from "../usePopular"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryString, selectSelectedPage, setSelectedPage } from '../MoviesSlice';
import Pager from '../Common/Pager';
import { useSearch } from '../useSearch';


function Movies() {

  const dispatch = useDispatch()
  const queryString = useSelector(selectQueryString)

  const page = useSelector(selectSelectedPage)
  useEffect(() => { dispatch(setSelectedPage("first")) }, [])

  const popularMovies = usePopular(page, "https://api.themoviedb.org/3/movie/popular?")
  const searchResults = useSearch(page, "https://api.themoviedb.org/3/search/movie?")

  return (
    <Container>
      <Header text={queryString ? `Search results for "${queryString}"` : "Popular Movies"} />
      <GridTemplate
        content={queryString ? searchResults.results : popularMovies.results}
        type={"movies"}
      />
      <Pager 
      content={queryString ? searchResults : popularMovies}
      />
    </Container>
  );
};

export default Movies;