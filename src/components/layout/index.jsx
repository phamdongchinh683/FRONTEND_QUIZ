import React from "react";
import { Outlet } from "react-router-dom";

import "../layout/layout.scss"
import Header from "./Header";
import Footer from "./Footer";
function Layout() {
  return (
    <div className="container-body">
      <header><Header /></header>
      <main>
        <Outlet />
      </main>
      <footer><Footer /></footer>
    </div>
  );
}

export default Layout;