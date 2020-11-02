import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { selectThemeStatus, setStatus } from './MoviesSlice';
import { GlobalStyle } from "./GlobalStyle";
import { darkTheme, theme } from "./theme";
import Movies from "./features/Movies/index";
import People from "./features/People/index";
import MoviePage from './features/MoviePage';
import PersonPage from './features/PersonPage';
import Browser from "./features/Browser/index";
import NavLogoButton from "./Common/NavLogoButton/index";
import WidthContainer from './Common/WidthContainer';
import {
  BackgroundContainer,
  StyledNavLink,
  StyledNavLinkLogo,
  NavList,
  NavListItem,
  NavContainer
} from "./styled";

function App() {
  const dispatch = useDispatch();
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
};

export default App;