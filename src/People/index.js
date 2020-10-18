import React, { useEffect } from 'react';
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { initialFetch, selectPageInformation } from '../MoviesSlice';
import Pager from '../Common/Pager';
import useQueryParameter from '../useQueryParameter';

function People() {
  const type = "people"
  const query = useQueryParameter("search")
  const page = useQueryParameter("page")
  const dispatch = useDispatch()
  const people = useSelector(selectPageInformation)

  const fetchOnLoad = () => {
    if (!page) {
      dispatch(initialFetch({
        page: 1,
        type: type,
        query: query
      }));
    }
    if (page) {
      dispatch(initialFetch({
        page: page,
        type: type,
        query: query
      }));
    }
  }

  useEffect(() => { fetchOnLoad() }, [page, query, type])


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