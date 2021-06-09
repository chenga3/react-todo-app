import React from "react";
import { Switch, Route } from "react-router-dom";
import Todos from "./pages/todos";
import Pomodoro from "./pages/pomodoro";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div className="p-4">
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
