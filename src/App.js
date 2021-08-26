import { Route, Switch } from 'react-router-dom';
import './index.css';
import Header from './components/Header';

import Footer from './components/Footer';
import Pricing from './components/Pricing';
// pages
import Home from './pages';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/buynow' component={Pricing} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
