import React, { useEffect } from 'react';
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import LoadingPage from "../Common/LoadingPage"
import NoResults from '../Common/NoResults';
import Failed from '../Common/Failed';
import Pager from '../Common/Pager';
import { useDispatch, useSelector } from 'react-redux';
import { initiateFetch, selectPageInformation, selectStatus } from '../MoviesSlice';
import useQueryParameter from '../useQueryParameter';
import { pageKey, peopleKey, searchKey } from '../keys';

function People() {
  const type = peopleKey
  const query = useQueryParameter(searchKey)
  const page = useQueryParameter(pageKey)
  const dispatch = useDispatch()
  const people = useSelector(selectPageInformation)
  const status = useSelector(selectStatus)

  useEffect(() => {
    dispatch(initiateFetch({
      page: page ? page : 1,
      type: type,
      query: query
    }))
  }, [query, page, type, dispatch])

  return (
    <Container>
      {status !== "failed" ?
        <Header text={!query ? `Popular ${type}` :
          `${people.total_results === 0 ? "Sorry, there are no results for" : "Search results for"} "${query}"`} />
        :
        ""
      }
      {status === "loading" ?
        <LoadingPage /> :
        ""
      }
      {status === "succes" && people.total_results > 0 ?
        <GridTemplate
          content={people.results}
          type={type}
        /> :
        ""
      }
      {status === "succes" && people.total_results === 0 ?
        <NoResults /> :
        ""
      }
      {status === "failed" ?
        <Failed />
        :
        ""
      }
      { status === "succes" && people.total_results > 0 ?
        <Pager
          content={people}
          type={type}
        /> :
        ""
      }
    </Container>
  );
};

export default People;