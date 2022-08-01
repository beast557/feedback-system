import React, { Fragment, useEffect } from "react";
import Routes from "./routing/Routes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import { Provider } from "react-redux";
import { store, persistor } from "./store";

import { loadUser } from "./actions/auth";
import { loadUser as loadUserTeacher } from "./actions/teacherAuth";
import setAuthToken from "./utils/setAuthToken";

import "./App.css";

function App() {
  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
      store.dispatch(loadUser());
      setAuthToken(localStorage.token);
      store.dispatch(loadUserTeacher());
    }
  }, []);
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Fragment>
              <Switch>
                <Route component={Routes} />
              </Switch>
            </Fragment>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
