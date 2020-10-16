import React from 'react';
import "../src/App.css"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/pages/HomePage/Home'
import Services from './components/pages/Services/Services'
import Products from './components/pages/Products/Products'
import Footer from './components/pages/Footer/Footer'
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/inspireme001" exact component={Home} /> */}
          <Route path="/services" exact component={Services} />
          <Route path="/products" exact component={Products} />
          <Route path="/footer" exact component={Footer} />
        </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
