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
import { actionMakeRequest, actionHandleRequest, loaderRequestID, actionLogRequest } from "./services/request_helpers";
import { Context } from "ailiyah-ui";
import { myTheme } from "./theme";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: loaderProject,
    errorElement: <ErrorPage />,
    action: actionProject,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/project/:projectId",
            element: <ContentPanel />,
            loader: loaderProjectId,
            action: actionLogRequest,

            children: [{
              path: "/project/:projectId/create",
              element: <ResultPanel />,
              action: actionMakeRequest,
            },
            {
              path: "/project/:projectId/:requestId",
              action: actionHandleRequest,
              element: <ResultPanel />,
              loader: loaderRequestID
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
      <Context.ThemeProvider {...myTheme}>
        <RouterProvider router={router} />
      </Context.ThemeProvider>
  </React.StrictMode>
);