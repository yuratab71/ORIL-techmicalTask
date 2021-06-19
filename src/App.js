import { Switch, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Details from "./pages/Details/Details";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/item/:id" component={Details} />
      </Switch>
    </>
  );
}

export default App;
