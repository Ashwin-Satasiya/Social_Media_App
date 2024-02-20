import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import PostLists from "./components/PostLists";

const router = createBrowserRouter([
  {
    path: "/",element: <App />,
    children: [
    {path: "/", element: <PostLists/>},
    {path: "create-post", element: <CreatePost/>} 
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
