import TodoList from "./components/TodoList";
import Calculator from "./components/Calculator";
import SearchFilter from "./components/SearchFilter";

import "./App.css";

function App() {

  return (

    <div className="container">

      <h1 className="main-title">
        Exercise 11 - React Components
      </h1>

      <TodoList />

      <Calculator />

      <SearchFilter />

    </div>

  );
}

export default App;