"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <div className="brand">
          <div className="brand-mark">OD-X</div>
          <div className="brand-sub">Chemical Overdrive</div>
        </div>

        {/* Desktop nav */}
        <nav className="topnav">
          <a href="#flavors">Fuel Line</a>
          <a href="#games">Invitational</a>
          <a href="#news">News</a>
          <a href="#apply">Intake</a>
        </nav>

        {/* Mobile button */}
        <button
          className="mobile-menu-button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Meny"
          aria-expanded={open}
        >
          {open ? "Lukk" : "Meny"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu">
          <a href="#flavors" onClick={() => setOpen(false)}>
            Fuel Line
          </a>
          <a href="#games" onClick={() => setOpen(false)}>
            Invitational
          </a>
          <a href="#news" onClick={() => setOpen(false)}>
            News
          </a>
          <a href="#apply" onClick={() => setOpen(false)}>
            Intake
          </a>
        </div>
      )}
    </header>
  );
}