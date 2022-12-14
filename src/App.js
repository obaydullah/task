import React from "react";
import "./App.css";
import Edit from "./components/Edit";
import Home from "./components/Home";
import { Provider } from "react-redux";
import { store } from "./app/store";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/edit" element={<Edit />} />
    </>
  )
);

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}
