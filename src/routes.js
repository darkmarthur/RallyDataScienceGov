
// import Dashboard from "views/Dashboard.js";
// import Icons from "views/Icons.js";
// import Map from "views/Map.js";
// import Notifications from "views/Notifications.js";
// import Rtl from "views/Rtl.js";
// import TableList from "views/TableList.js";
// import Typography from "views/Typography.js";
// import UserProfile from "views/UserProfile.js";

import Inicio from "views/Inicio.js";
import Reto1 from "views/Reto1.js";
import Reto2 from "views/Reto2.js";
import Reto3 from "views/Reto3.js";
import Equipo from "views/Equipo.js";
import Contacto from "views/Contacto.js";
import ExploraODS from "views/ExploraODS.js";
import Blog from "views/Blog.js";

var routes = [
  {
    path: "/inicio",
    name: "Inicio",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-world",
    component: Inicio,
    layout: "/admin",
  },
  {
    path: "/reto1",
    name: "Reto 1",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-bar-32",
    component: Reto1,
    layout: "/admin",
  },
  {
    path: "/reto2",
    name: "Reto 2",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Reto2,
    layout: "/admin",
  },
  {
    path: "/reto3",
    name: "Reto 3",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: Reto3,
    layout: "/admin",
  },
  {
    path: "/explora",
    name: "Explora ODS y Programas Presupuestales",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-coins",
    component: ExploraODS,
    layout: "/admin",
  },
  {
    path: "/blog",
    name: "Blog",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chat-33",
    component: Blog,
    layout: "/admin",
  },  
  {
    path: "/equipo",
    name: "Equipo",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-badge",
    component: Equipo,
    layout: "/admin",
  },
  {
    path: "/contacto",
    name: "Contacto",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-email-85",
    component: Contacto,
    layout: "/admin",
  },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: Icons,
  //   layout: "/admin",
  // },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: UserProfile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: TableList,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: Typography,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
];
export default routes;
