import { Route, Switch } from "react-router";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={HatsPage} path="/hats" />
      </Switch>
    </div>
  );
}

export default App;
