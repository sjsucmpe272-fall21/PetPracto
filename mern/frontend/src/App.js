import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Pages/Pet Owner/LandingPage';
import VetSignup from './Pages/Vet/VetSignup'
import VetLogin from './Pages/Vet/VetLogin'
import MapsPage from './Pages/Pet Owner/MapsPage'
import MedStore from './Pages/Pet Owner/MedStore'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>

          <Route exact path="/vetSignUp">
            <VetSignup />
          </Route>

          <Route exact path="/vetLogin">
            <VetLogin />
          </Route>

          <Route exact path="/MapsPage">
            <MapsPage />
          </Route>

          <Route exact path="/MedStore">
            <MedStore />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
