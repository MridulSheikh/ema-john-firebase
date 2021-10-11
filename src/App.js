import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivateRout from './components/private Route/PrivateRout';
import Shipping from './components/shipping/Shipping';
import Shop from './components/Shop/Shop';
import Singup from './components/singup/Singup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
    <AuthProvider>
    <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Shop></Shop>
      </Route>
      <Route path="/shop">
        <Shop></Shop>
      </Route>
      <Route path="/review">
        <OrderReview></OrderReview>
      </Route>
      <Route path="/inventory">
        <Inventory></Inventory>
      </Route>
      <PrivateRout path="/placeorder">
       <Shipping></Shipping>
      </PrivateRout>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route path="/singup">
      <Singup></Singup>
      </Route>
      <Route path="*">
        <NotFound></NotFound>
      </Route>
    </Switch>
  </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
