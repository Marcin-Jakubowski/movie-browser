import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Movies from "./Movies/index";
import People from "./People/index";
import NavLogoButton from "./NavLogoButton/index";
import Browser from "./Browser/index";
import { StyledNavLink, StyledNavLinkLogo, NavList, NavListItem, NavContainer } from "./styled";
import MoviePage from './MoviePage';
import PersonPage from './PersonPage';

export default () => (
  <HashRouter>
    <nav>
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
          <Browser />
        </NavContainer>
      </NavList>
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
      </Switch>
    </nav>
  </HashRouter>
);