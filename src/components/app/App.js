import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import MainPage from '../pages/MainPage';
import MapPage from '../pages/MapPage';


function App() {
  return (
    <Router>
      <div className="App">

        <AppHeader />

        <main>
          <Switch>

            <Route exact path="/">
              <MainPage />
            </Route>

            <Route exact path="/map">
              <MapPage />
            </Route>

          </Switch>
        </main>

      </div>

    </Router>

  );
}

export default App;
