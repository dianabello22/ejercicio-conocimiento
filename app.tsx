import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import Header from './components/Header';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Inicio} />
          <Route path="/productos" component={Productos} />
          <Route path="/contacto" component={Contacto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;