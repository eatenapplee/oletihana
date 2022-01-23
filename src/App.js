import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/pages/Login.js';
import Home from './components/pages/Home.js';
import Header from './components/layout/Header.js'

function App() {
  return (
    <Router basename="/">
    <div className="App">

        <Route exact path="/">
          <Login />
        </Route>

        <Route path="/home">
          <Header />
          <Home />
        </Route>

    </div>
    </Router>
  );
}

export default App;
