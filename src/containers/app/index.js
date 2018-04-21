import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home';
import About from '../about';
import NavMenu from '../../components/NavMenu';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <header className="col-sm-2">
            <NavMenu />
          </header>
          <main className="col-sm-10">
            <Route exact path="/" component={Home} />
            <Route exact path="/about-us" component={About} />
          </main>
        </div>
      </div>
    );
  }
}

export default App;
