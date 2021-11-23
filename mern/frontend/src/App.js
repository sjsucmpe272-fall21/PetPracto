import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from './Pages/Pet Owner/LandingPage';
import VetSignup from './Pages/Vet/VetSignup'
import VetLogin from './Pages/Vet/VetLogin'
import VetHome from './Pages/Vet/VetHome'
import VetProfile from './Pages/Vet/VetProfile'

import VetAppointments from './Pages/Vet/VetAppointments'
import MapsPage from './Pages/Pet Owner/MapsPage'
import MedStore from './Pages/Pet Owner/MedStore'
import BookAppointment from './Pages/Pet Owner/BookAppointment';
import PetOwnerLogin from './Pages/Pet Owner/PetOwnerLogin';

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

          <Route exact path="/mapsPage">
            <MapsPage />
          </Route>

          <Route exact path="/medStore">
            <MedStore />
          </Route>

          <Route exact path="/bookAppointment">
            <BookAppointment />
          </Route>

          <Route exact path="/petOwnerSignIn">
            <PetOwnerLogin />
          </Route>
          <Route exact path="/petOwnerSignUp">
            <PetOwnerLogin />
          </Route>
          <Route exact path="/vetAppointments">
            <VetAppointments />
          </Route>
          <Route exact path="/vetHome">
            <VetHome />
          </Route>
          <Route exact path="/vetProfile">
            <VetProfile />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;

