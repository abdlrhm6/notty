import React from "react";
import { Link } from "react-router-dom";

export default function Homenav() {
  return (
    <div>
      <nav>
        <h1>Nott</h1>

        <ul>
          <Link className="link" to="/">
            Login
          </Link>
          <Link className="link" to="/newuser">
            Register
          </Link>
        </ul>
      </nav>
    </div>
  );
}
