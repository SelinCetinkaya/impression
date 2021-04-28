import "./App.css";
import Home from "./screens/Home/Home";
import Register from "./screens/Register/Register";
import Header from "./components/Header/Header";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </div>
  );
}

export default App;
