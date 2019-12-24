import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Ellada/Login/Login';
import Signup from './Components/Ellada/Signup/Signup';
import AboutUs from './Components/AboutUs/AboutUs';
import Privacy from './Components/Privacy/PrivacyPolicy';
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/policy" component={Privacy} />
          <Route path="/contactus" component={ContactUs} />
      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
