import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
  <Router>
    <div>
      <Navbar />
        <div className="container">
          <div className="row justify-content-center justify-content-sm-start">
            <Switch>
              <Route exact path="/" component={About} />
              <Route exact path="/my-portfolio" component={Portfolio} />
              <Route exact path="/resume" component={Resume} />
              <Redirect to="/"/>
            </Switch>
          </div>
        </div>
      <Footer />
    </div>
  </Router>
  );
}

export default App;
