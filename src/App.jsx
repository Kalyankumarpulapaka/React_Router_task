import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import All from "./components/All";
import Full from "./components/Full";
import Cyber from "./components/Cyber";
import Career from "./components/Career";
import Datas from "./components/Datas";
import Parent from "./components/Parent";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <Parent/>,
    children:[
      {
        path: "/",
        element: <All/>
      },
      {
        path: "/Full",
        element: <Full />
      },
      {
        path: "/Cyber",
        element: <Cyber />
      },
      {
        path: "/Career",
        element: <Career />
      },
      {
        path: "/Datas",
        element: <Datas />
      }

    ]
  }
]);

const App = () => {
  return (
    <div className="container">
      <div>
        <RouterProvider router={routes}></RouterProvider>
      </div>
      
    </div>
  );
};

export default App;
