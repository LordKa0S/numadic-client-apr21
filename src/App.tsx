import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/home/home';
import PlaceInteractions from './components/place-interactions/place-interactions';
import VehicleActivity from './components/vehicle-activity/vehicle-activity';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/place-interactions">
            <PlaceInteractions />
          </Route>
          <Route path="/vehicle-activity">
            <VehicleActivity />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
