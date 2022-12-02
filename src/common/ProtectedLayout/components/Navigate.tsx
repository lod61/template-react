import React from "react";
import { Link } from "react-router-dom";

export default function Navigate() {
  return (
    <nav>
      <Link to="/">首页</Link>
      {/* <Link to="/login">Login</Link> */}
    </nav>
  );
}
