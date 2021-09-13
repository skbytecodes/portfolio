import React from 'react';
import './App.css';
import Header from './components/Header'
import MainSection from "./components/MainSection"
import Contact from './components/Contact';
import Projects from './components/Projects';
import About from './components/About';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import insta from "./images/insta.png"
import twitter from "./images/twit.png"
import linkedin from "./images/linked.png"

function App() {
  return (
    <Router>
      <div className="App">
       
      <Switch>
            <Route path="/projects">
              <Header />
              <Projects />
            </Route>
            <Route path="/about" >
              <Header />
              <About />
            </Route>
            <Route path="/contact" >
              <Header />
              <Contact insta={insta} twitter={twitter} lin = {linkedin}/>
            </Route>
            <Route path="/" >
              <Header />
              <MainSection />
            </Route>
        </Switch>

      </div>  
    </Router>
  );
}

export default App;
