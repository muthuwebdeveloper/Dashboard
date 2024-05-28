import React from "react";
import {
  RiSpeedUpLine,
  RiCalendarLine,
  RiUser2Line,
  RiSurveyLine,
  RiListCheck3,
  RiProjector2Line,
} from "@remixicon/react";
import { ROUTES } from "./routeConstants";

export const routes = [
  {
    path: ROUTES.HOME,
    label: "Overview",
    icon: <RiSpeedUpLine className="icon side-icon" />,
    key: "1",
  },
  {
    path: ROUTES.ALLEMPLOYEE,
    label: "All Employees",
    icon: <RiUser2Line className="icon side-icon" />,
    key: "2",
  },
  {
    path: ROUTES.CALENDAR,
    label: "Calendar",
    icon: <RiCalendarLine className="icon side-icon" />,
    key: "3",
  },
  {
    path: ROUTES.LEAVE_REQUEST,
    label: "All Leave Request",
    icon: <RiSurveyLine className="icon side-icon" />,
    key: "4",
  },
  {
    path: ROUTES.ALL_ATTENDANCE,
    label: "All Attendance",
    icon: <RiListCheck3 className="icon side-icon" />,
    key: "5",
  },
  {
    path: ROUTES.PROJECT,
    label: "Project",
    icon: <RiProjector2Line className="icon side-icon" />,
    key: "6",
  },
  {
    path: ROUTES.USER_OVERVIEW,
    label: "UserOverview",
    icon: <RiSpeedUpLine className="icon side-icon" />,
    key: "7",
  },
  {
    path: ROUTES.USER_ATTENDANCE,
    label: "UserAttendance",
    icon: <RiListCheck3 className="icon side-icon" />,
    key: "8",
  },
];
