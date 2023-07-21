import { useState } from "react";
import ThemeSwitch from "../atoms/ThemeSwitch";

function Navbar() {
  return (
    <nav className="bg-gray-800 px-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="font-bold text-white">
              UNIFI SOLUTIONS TASK
            </a>
          </div>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
