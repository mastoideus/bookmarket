import React from 'react'
import Toolbar from './Navigation/Toolbar/Toolbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProductsPage from './ProductsPage/ProductsPage'
import {GenreProvider} from './genres-context'
import OrdersPage from './OrdersPage/OrdersPage'


function App() {
  return (
    <GenreProvider>
    <Router>
        <Toolbar/>
        <Switch>
        <Route path='/' exact>
           <ProductsPage/>
        </Route>
        <Route path='/orders' exact>
           <OrdersPage/>
        </Route>
        </Switch>
    </Router>
    </GenreProvider>
  );
}

export default App;


