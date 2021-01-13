import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
import Tracker from './pages/trackerPage/Tracker';
import About from './pages/About';
import OurMission from './pages/landingPage/landing';
// eslint-disable-next-line import/no-named-as-default-member
import ContactUs from './pages/Contactus';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={OurMission} />
          <Route path="/about" component={About} />
          <Route path="/tracker" component={Tracker} />
          <Route path="/contactus" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
