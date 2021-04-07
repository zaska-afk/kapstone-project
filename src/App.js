import logo from "./logo.svg";
import "./App.css";
import NotFound from "./notFound/notFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
