import "./App.css";
import Card from "./Card";
import Cardcreator from "./Cardcreator";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Cardcreator />
          </Route>
          <Route path="/card/:nanoId">
            <Card />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
