import React from "react";
import {
  RiSpeedUpLine,
  RiPieChartLine,
  RiCalendarLine,
  RiUser3Line,
  RiAdminLine,
  RiFileListLine,
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
    path: ROUTES.SALES_REPORT,
    label: "Sales Report",
    icon: <RiPieChartLine className="icon side-icon" />,
    key: "2",
  },
  {
    path: ROUTES.CALENDAR,
    label: "Calendar",
    icon: <RiCalendarLine className="icon side-icon" />,
    key: "3",
  },
  {
    path: ROUTES.PROFILE,
    label: "Profile",
    icon: <RiUser3Line className="icon side-icon" />,
    key: "4",
  },
  {
    path: ROUTES.ADMIN_OVERVIEW,
    label: "Admin Overview",
    icon: <RiAdminLine className="icon side-icon" />,
    key: "5",
  },
  {
    path: ROUTES.SALES,
    label: "Sales",
    icon: <RiFileListLine className="icon side-icon" />,
    key: "6",
  },
];
