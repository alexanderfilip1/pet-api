import React from "react";
import "../assets/css/Header.css";

export default function Header() {
  const links = [
    {
      path: "Register",
      url: "/register",
    },
    {
      path: "Sign in",
      url: "/login",
    },
    {
      path: "Documentation",
      url: "/documentation",
    },
  ];

  return (
    <>
      <header className="header">
        <nav className="header__navbar">
          <a href="/" className="header__logo">
            AnimalsApi
          </a>
          <ul className="header__list">
            {links.map((link, index) => {
              const { path, url } = link;
              return (
                <li className="header__list--item" key={index}>
                  <a href={url} className="header__list--link">
                    {path}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </>
  );
}
