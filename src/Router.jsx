import React from 'react';
import { Switch, Route } from "react-router";
import {Products, ProductDetail, ProductEdit, ProductList, Top, Reset, SignIn, SignUp, CartList, OrderConfirm, OrderHistory, FavList, CategoryPage, SearchResult} from './templates';
import Auth from "./Auth";

const Router = () => {
  return(
    <Switch>
      <Route exact path={"/signup"} component={SignUp} />
      <Route exact path={"/signin"} component={SignIn} />
      <Route exact path={"/signin/reset"} component={Reset} />

      <Auth>
        <Route exact path={"(/)?"} component={Top} />
        <Route exact path={"/products"} component={Products} />
        <Route exact path={"/product/:id"} component={ProductDetail} />
        <Route path={"/product/edit(/:id)?"} component={ProductEdit} />

        <Route exact path={"/cart"} component={CartList} />
        <Route exact path={"/order/confirm"} component={OrderConfirm} />
        <Route exact path={"/order/history"} component={OrderHistory} />
        <Route exact path={"/fav"} component={FavList} />
        <Route path={"/category(/:id)?"} component={CategoryPage} />

        <Route exact path={"/search-result"} component={SearchResult} /> 
      </Auth>
    </Switch>
  )
}

export default Router;