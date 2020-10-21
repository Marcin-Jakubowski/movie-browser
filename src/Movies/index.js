import React, { useEffect } from 'react';
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { initiateFetch, selectPageInformation } from '../MoviesSlice';
import Pager from '../Common/Pager';
import useQueryParameter from '../useQueryParameter';
import { moviesKey, pageKey, searchKey } from '../keys';


function Movies() {
  const type = moviesKey
  const query = useQueryParameter(searchKey)
  const page = useQueryParameter(pageKey)
  const dispatch = useDispatch()
  const movies = useSelector(selectPageInformation)


  useEffect(() => { dispatch(initiateFetch({
    page: page ? page : 1,
    type: type,
    query: query
  })) }, [query, page, type, dispatch])


  return (
    <Container>
      <Header text={!query ? `Popular ${type}` : `Search Results for "${query}"`} />
      <GridTemplate
        content={movies.results}
        type={type}
      />
      <Pager
        content={movies}
        type={type}
      />
    </Container>
  );
};

export default Movies;