import React from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import Movies from "./Movies/index";
import People from "./People/index";
import NavLogoButton from "./NavLogoButton/index";
import Browser from "./Browser/index";
import { BackgroundContainer, StyledNavLink, StyledNavLinkLogo, NavList, NavListItem, NavContainer } from "./styled";
import MoviePage from './MoviePage';
import PersonPage from './PersonPage';
import WidthContainer from './Common/WidthContainer';
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, theme } from "./theme";
import { useSelector } from 'react-redux';
import { selectThemeStatus } from './MoviesSlice';
import { useDispatch } from 'react-redux';
import { setStatus } from './MoviesSlice';

function App() {
  const dispatch = useDispatch()
  const themeStatus = useSelector(selectThemeStatus);

  return (
    <ThemeProvider theme={themeStatus === false ? theme : darkTheme}>
      <GlobalStyle />
      <HashRouter>
        <nav>
          <BackgroundContainer>
            <WidthContainer>
            <NavList>
              <NavContainer>
                <NavListItem>
                  <StyledNavLinkLogo
                    to="/movies"
                    onClick={() => { dispatch(setStatus("loading")) }}
                  >
                    <NavLogoButton />
                  </StyledNavLinkLogo>
                </NavListItem>
                <NavListItem>
                  <StyledNavLink
                    to="/movies"
                    onClick={() => { dispatch(setStatus("loading")) }}
                  >
                    MOVIES
                </StyledNavLink>
                </NavListItem>
                <NavListItem>
                  <StyledNavLink
                    to="/people"
                    onClick={() => { dispatch(setStatus("loading")) }}
                  >
                    PEOPLE
                     </StyledNavLink>
                </NavListItem>
              </NavContainer>
              <Browser />
            </NavList>
            </WidthContainer>
          </BackgroundContainer>
          <Switch>
            <Route path="/movies/:id">
              <MoviePage />
            </Route>
            <Route path="/people/:id">
              <PersonPage />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/people">
              <People />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </nav>
      </HashRouter>
    </ThemeProvider>

  );
}

export default App;