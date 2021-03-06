import React from "react";
import { Switch, Route } from "react-router-dom";

import Todos from "./pages/Todos";
import Pomodoro from "./pages/Pomodoro";
import Navbar from "./core/Navbar";

const App: React.FC = () => {
  return (
    <div className="bg-grey-light">
      <Navbar />
      <Switch>
        <Route path="/todos">
          <Todos />
        </Route>
        <Route path="/pomodoro">
          <Pomodoro />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
