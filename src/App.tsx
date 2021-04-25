import React from "react";
import Todos from "./pages/todos";
import Navbar from "./components/navbar";

const App: React.FC = () => {
  return (
    <div className="p-4">
      <Navbar />
      <Todos />
    </div>
  );
};

export default App;
