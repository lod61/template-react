import * as React from "react";
import "./App.css";
import router from "@/common/Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
