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

export default () => (
  <HashRouter>
    <nav>
      <BackgroundContainer>
        <WidthContainer>
          <NavList>
            <NavContainer>
              <NavListItem>
                <StyledNavLinkLogo to="/movies"><NavLogoButton /></StyledNavLinkLogo>
              </NavListItem>
              <NavListItem>
                <StyledNavLink to="/movies">MOVIES</StyledNavLink>
              </NavListItem>
              <NavListItem>
                <StyledNavLink to="/people">PEOPLE</StyledNavLink>
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
);