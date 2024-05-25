// src/components/AppRoute.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../layouts/Main";
import NoPageFound from "../components/NoPageFound";
import SalesReport from "../components/Sales/AllEmployee";
import Overview from "../components/Overview/Overview";
import Calendar from "../components/Calendar/Calendar";
import Profile from "../components/Profile/Profile";
import { ROUTES } from "../constants/routeConstants";

const routeConfig = [
  {
    path: ROUTES.HOME,
    element: <Main />,
    children: [
      { path: "", element: <Overview />, index: true },
      { path: ROUTES.SALES_REPORT, element: <SalesReport /> },
      { path: ROUTES.CALENDAR, element: <Calendar /> },
      { path: ROUTES.PROFILE, element: <Profile /> },
    ],
  },
  { path: "*", element: <NoPageFound /> },
];

const AppRoute = () => {
  return (
    <Router>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} path={route.path} element={route.element}>
            {route.children &&
              route.children.map((childRoute) => (
                <Route
                  key={childRoute.path}
                  path={childRoute.path}
                  element={childRoute.element}
                  index={childRoute.index}
                />
              ))}
          </Route>
        ))}
      </Routes>
    </Router>
  );
};

export default AppRoute;
