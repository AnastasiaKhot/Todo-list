import React from 'react';
import { NavLink } from 'react-router-dom';

export default function MyNavbar(): JSX.Element {
  return (
    <nav className="bg-yellow-400 mb-3 h-20">
      <NavLink
        to="/"
        className="text-white w-full h-full text-3xl flex items-center justify-center text-center"
      >
        TodoApp
      </NavLink>
    </nav>
  );
}
