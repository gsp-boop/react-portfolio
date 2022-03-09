import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home'
import Contact from './components/pages/Contact'
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  return (
    <>
      <Router>
          <ScrollToTop />
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
