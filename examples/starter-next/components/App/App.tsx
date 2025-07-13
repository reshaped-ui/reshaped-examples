"use client";

import React from "react";
import { Reshaped } from "reshaped";
import "reshaped/themes/slate/theme.css";
import "./App.css";

const App = (props: { children: React.ReactNode }) => {
  return <Reshaped theme="slate">{props.children}</Reshaped>;
};

export default App;
