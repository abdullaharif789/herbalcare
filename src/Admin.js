// /* eslint-disable */
import * as React from "react";
import { Admin, Resource } from "react-admin";

import authProvider from "./providers/authProvider";
import dataProvider from "./providers/dataProvider";

import layout from "./layout";
import { app } from "./contants";

export default function App() {
  return (
    <Admin
      layout={layout}
      dataProvider={dataProvider}
      authProvider={authProvider}
    ></Admin>
  );
}
