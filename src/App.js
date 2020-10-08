import React from 'react';
import { HashRouter, Switch, Route } from "react-router-dom";
import Movies from "./Movies/index";
import People from "./People/index";
import { StyledNavLink, NavList, NavListItem } from "./styled";

export default () => (
  <HashRouter>
    <nav>
      <NavList>
        <NavListItem>
          <StyledNavLink to="/movies">MOVIES</StyledNavLink>
        </NavListItem>
        <NavListItem>
          <StyledNavLink to="/people">PEOPLE</StyledNavLink>
        </NavListItem>
      </NavList>
      <Switch>
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