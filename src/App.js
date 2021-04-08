import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import { Switch, Route } from 'react-router-dom'
import Messages from "./components/Messages"
import Homepage from "./components/Homepage"

function App() {
  return (
    <div >
      <NavBar />
      <Switch>
        <Route path='/Messages'>
          <Messages />
        </Route>
        <Route path='/Homepage'>
          <Homepage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
