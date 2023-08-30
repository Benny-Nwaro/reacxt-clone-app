import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Notfound from "./Pages/Notfound.jsx";
import Contact from "./Pages/Contact.jsx";
import About from "./Pages/About.jsx";
import SignIn from "./Pages/SignIn.jsx";

// import Home from "./Pages/Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Notfound />,
  },
  {
    path: "contacts/",
    element: <Contact />,
  },
  {
    path: "about/",
    element: <About />,
  },
  {
    path: "login/",
    element: <SignIn />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
