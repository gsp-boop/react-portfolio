import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
      <Router>
          <Navigation/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contact} />
          </Switch>
      </Router>
    </>

  );
}

export default App;
