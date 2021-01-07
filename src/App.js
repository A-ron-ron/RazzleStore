import './App.css';
import TestContext from "./context.js";
import React, { useContext } from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

const App = ({ routes, initialData }) => {
  const { TestContext } = useContext(TestContext)
  console.log(this.context)
  return routes
    ? <div>
        <Switch>
          {routes.map((route, index) => {
            // pass in the initialData from the server or window.DATA for this
            // specific route
            return (
              <Route
                key={index}
                path={route.path}
                exact
                render={props =>
                  React.createElement(route.component, {
                    ...props,
                    initialData: initialData[index] || null,
                  })}
              />
            );
          })}
        </Switch>
      </div>
    : null;
};

export default App;