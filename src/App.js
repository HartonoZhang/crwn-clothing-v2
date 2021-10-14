import { Route, Switch } from "react-router";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopePage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={HomePage} path="/" />
        <Route component={ShopePage} path="/shop" />
      </Switch>
    </div>
  );
}

export default App;
