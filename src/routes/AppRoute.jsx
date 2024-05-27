// src/components/AppRoute.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "../constants/routeConstants";
import Main from "../layouts/Main";
import NoPageFound from "../components/NoPageFound";
import SalesReport from "../components/Employee/AllEmployee";
import Overview from "../components/Overview/Overview";
import Calendar from "../components/Calendar/Calendar";
import AllLeaveRequest from "../components/Leave/AllLeaveRequest";
import AllAttendance from "../components/Attendance/AllAttendance";
import Project from "../components/Project/Project";
import Login from "../auth/Login";

const routeConfig = [
  { path: ROUTES.LOGIN, element: <Login /> },
  {
    path: ROUTES.HOME,
    element: <Main />,
    children: [
      { path: "", element: <Overview />, index: true },
      { path: ROUTES.ALLEMPLOYEE, element: <SalesReport /> },
      { path: ROUTES.CALENDAR, element: <Calendar /> },
      { path: ROUTES.LEAVE_REQUEST, element: <AllLeaveRequest /> },
      { path: ROUTES.ALL_ATTENDANCE, element: <AllAttendance /> },
      { path: ROUTES.PROJECT, element: <Project /> },
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
