import logo from './logo.svg';
import './App.css';
import NavBar from './components/navBar'
import { Switch, Route } from 'react-router-dom'
import MessageView from "./components/messageView"


function App() {
  return (
    <div >
      <NavBar />
      <Switch>
        <Route path='/Messages'>
          <MessageView />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
