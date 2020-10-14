import React, { useEffect } from 'react';
import { usePopular } from "../usePopular"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectQueryString, selectSelectedPage, setSelectedPage } from '../MoviesSlice';
import Pager from '../Common/Pager';
import { useSearch } from '../useSearch';


function People() {

  const dispatch = useDispatch()
  const queryString = useSelector(selectQueryString)

  const page = useSelector(selectSelectedPage)
  useEffect(() => { dispatch(setSelectedPage("first")) }, [])

  const popularPeople = usePopular(page, "https://api.themoviedb.org/3/person/popular?")
  const searchResults = useSearch(page, "https://api.themoviedb.org/3/search/person?")

  return (
    <Container>
      <Header text={queryString ? `Search results for "${queryString}"` : "Popular People"} />
      <GridTemplate
        content={queryString ? searchResults.results : popularPeople.results}
        type={"people"}
      />
      <Pager
        content={queryString ? searchResults : popularPeople}
      />
    </Container>
  );
};

export default People;