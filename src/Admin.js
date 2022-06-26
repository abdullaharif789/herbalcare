// /* eslint-disable */
import * as React from "react";
import { Admin, Resource } from "react-admin";

import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";

import layout from "./layout";

import products from "./products/products";
import variants from "./variants/variants";
import orders from "./orders/orders";

export default function App() {
  return (
    <Admin
      layout={layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
    >
      <Resource name="products" {...products} />
      <Resource name="variants" {...variants} />
      <Resource name="orders" {...orders} />
    </Admin>
  );
}
