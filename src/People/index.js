import React, { useEffect } from 'react';
import { useAPI } from "../Movies/useAPI"
import Container from '../Common/Container';
import GridTemplate from '../Common/GridTemplate';
import Header from '../Common/Header';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedPage, setSelectedPage } from '../Movies/MoviesSlice';
import Pager from '../Common/Pager';


function People() {

  const dispatch = useDispatch()

  const page = useSelector(selectSelectedPage)

  useEffect(() => { dispatch(setSelectedPage("first")) }, [])

  const popularPeople = useAPI(page, "https://api.themoviedb.org/3/person/popular?")

  return (
    <Container>
      <Header text={"Popular People"} />
      <GridTemplate
        content={popularPeople}
        type={"people"}
      />
      <Pager />
    </Container>
  );
};

export default People;