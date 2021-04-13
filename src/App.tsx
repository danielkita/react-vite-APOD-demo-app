import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

import logotype from "./assets/logo.svg";

const MainContainer = React.lazy(
  () => import("./app/pages/main/main.container")
);
const Favorites = React.lazy(
  () => import("./app/pages/favorites/favorites.container")
);

const App = () => (
  <React.Suspense fallback="">
    <header>
      <img src={logotype} alt="NASA" />
    </header>
    <Router>
      <Switch>
        <Route component={MainContainer} exact={true} path="/" />
        <Route component={Favorites} path="/fav" />
        <Redirect to="/" />
      </Switch>
    </Router>
    <footer>
      <p>
        <small style={{ fontSize: 9 }}>
          React demo app - {new Date().getFullYear()}
        </small>
      </p>
    </footer>
  </React.Suspense>
);

export default App;
