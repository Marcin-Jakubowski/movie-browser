import React, { useEffect } from 'react';
import { useFetch } from "../useFetch"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryString, selectSelectedPage, setSelectedPage } from '../MoviesSlice';
import Pager from '../Common/Pager';


function Movies() {

  const dispatch = useDispatch()
  const queryString = useSelector(selectQueryString)
  const page = useSelector(selectSelectedPage)
  
  useEffect(() => { dispatch(setSelectedPage("first")) }, [])

  const fetchResults = useFetch(
    page,
    "https://api.themoviedb.org/3/search/movie?",
    "https://api.themoviedb.org/3/movie/popular?"
  )

  return (
    <Container>
      <Header text={queryString ? `Search results for "${queryString}"` : "Popular Movies"} />
      <GridTemplate
        content={fetchResults.results}
        type={"movies"}
      />
      <Pager
        content={fetchResults}
      />
    </Container>
  );
};

export default Movies;