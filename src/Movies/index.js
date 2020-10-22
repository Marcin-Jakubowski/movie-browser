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
import { moviesKey, pageKey, searchKey } from '../keys';
import useQueryParameter from '../useQueryParameter';



function Movies() {
  const type = moviesKey
  const query = useQueryParameter(searchKey)
  const page = useQueryParameter(pageKey)
  const dispatch = useDispatch()
  const movies = useSelector(selectPageInformation)
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
          `${movies.total_results === 0 ? "Sorry, there are no results for" : "Search results for"} "${query}"`} />
        :
        ""
      }
      {status === "loading" ?
        <LoadingPage /> :
        ""
      }
      {status === "succes" && movies.total_results > 0 ?
        <GridTemplate
          content={movies.results}
          type={type}
        /> :
        ""
      }
      {status === "succes" && movies.total_results === 0 ?
        <NoResults /> :
        ""
      }
      {status === "failed" ?
        <Failed />
        :
        ""
      }
      { status === "succes" && movies.total_results > 0 ?
        <Pager
          content={movies}
          type={type}
        /> :
        ""
      }
    </Container>
  );
};

export default Movies;