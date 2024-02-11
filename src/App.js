
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Main from './component/Main';
import Category from './component/Category';

import Productcoaster from './component/Productcoaster';
import Productkeyring from './component/Productkeyring';
import Productcarhanging from './component/Productcarhanging';
import Products from './component/Products';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Switch>
          <Route path="/main">
            <Main/>
          </Route>
          <Route path="/category/:categoryId">
            <Category/>
          </Route>
          <Route path="/product/:productId">
           <Products/>
          </Route>
          <Route path="/productcoaster/:productcoasterId">
           <Productcoaster/>
          </Route>
          <Route path="/productkeyring/:productkeyringId">
           <Productkeyring/>
          </Route>
          <Route path="/productcarhanging/:productcarhangingId">
           <Productcarhanging/>
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route> */}
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
      </>
  );
}

export default App;
