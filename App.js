import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Academics from './components/Academics';
import Admissions from './components/Admissions';
import Faculty from './components/Faculty';
import Students from './components/Students';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/academics" component={Academics} />
          <Route path="/admissions" component={Admissions} />
          <Route path="/faculty" component={Faculty} />
          <Route path="/students" component={Students} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
