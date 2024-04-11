import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import { actionProject, loaderProject, loaderProjectId } from "./services/project_helpers";
import ErrorPage from "./routes/error";
import ContentPanel from "./components/ContentPanel";
import ResultPanel from "./components/ResultPanel";
import { actionMakeRequest } from "./services/request_helpers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    loader: loaderProject,
    errorElement: <ErrorPage/>,
    action: actionProject,
    children: [
      {
        errorElement: <ErrorPage/>,
        children: [
          {
            path: "/project/:projectId",
            element: <ContentPanel/>,
            loader: loaderProjectId,
            children: [
              {
                path: "/project/:projectId/generate",
                action: actionMakeRequest,
                element: <ResultPanel/>
              }
            ]
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);