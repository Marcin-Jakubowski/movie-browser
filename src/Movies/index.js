import React, { useEffect } from 'react';
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfFetchPopular, selectPageInformation } from '../MoviesSlice';
import Pager from '../Common/Pager';
import useQueryParameter from '../useQueryParameter';
import { useLocation } from 'react-router-dom';


function Movies() {
  const type = "movies"
  const location = useLocation()
  const query = useQueryParameter("search")
  const page = useQueryParameter("page")
  const dispatch = useDispatch()
  const movies = useSelector(selectPageInformation)

  const fetchOnLoad = () => {
    if (!query && !page) {
      dispatch(checkIfFetchPopular({page: 1, type:type}));
    }
    if (!query && page) {
      dispatch(checkIfFetchPopular({page: page, type:type}));
    }
  }

  useEffect(() => { fetchOnLoad() }, [location.pathname, query])


  return (
    <Container>
      <Header text={`Popular ${type}`} />
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