import React, { useEffect } from 'react';
import { useFetch } from "../useFetch"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { checkIfFetchPopular, selectPageInformation, selectQueryString, selectSelectedPage, setSelectedPage } from '../MoviesSlice';
import Pager from '../Common/Pager';
import { useLocation } from 'react-router-dom';
import useQueryParameter from '../useQueryParameter';


function People() {
  const type = "people"
  const location = useLocation()
  const query = useQueryParameter("search")
  const page = useQueryParameter("page")
  const dispatch = useDispatch()
  const people = useSelector(selectPageInformation)

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
        content={people.results}
        type={type}
      />
      <Pager
        content={people}
        type={type}
      />
    </Container>
  );
};

export default People;