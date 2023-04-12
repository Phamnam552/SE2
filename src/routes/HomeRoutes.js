/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/panda
 */

import React, { Component } from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import BaseLayout from "../layouts/BaseLayout";

// Route Views
import Home from "../views/Home/HomeContainer";
import SingleProductContainer from "../views/Product/SingleProductContainer";
import CategoryContainer from "../views/Category/CategoryContainer";

var routes = [
  {
    path: "/pandas",
    exact: true,
    layout: BaseLayout,
    component: Home,
  },

  {
    path: "/home",
    layout: BaseLayout,
    component: () => <Redirect to="/pandas" />,
  },
  {
    path: "/pandas/single-product/:id",
    layout: BaseLayout,
    component: SingleProductContainer,
  },
  {
    path: "/pandas/shops/:category",
    layout: BaseLayout,
    component: CategoryContainer,
  },
];

export default routes;
