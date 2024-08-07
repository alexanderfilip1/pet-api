import { useState } from "react";
import "../assets/css/Header.css";
import MobileHeader from "./MobileHeader";
import "../Links";

export default function Header() {
  const links = [
    {
      path: "Documentation",
      url: "/documentation",
    },
    {
      path: "Sign in",
      url: "/login",
    },
    {
      path: "Register",
      url: "/register",
    },
  ];

  const [burgerMenu, setBurgerMenu] = useState(false);

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

          <div
            className="header__navbar--burgerMenu"
            onClick={() => {
              setBurgerMenu(!burgerMenu);
            }}
          >
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 18L20 18"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 12L20 12"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M4 6L20 6"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {burgerMenu && <MobileHeader />}
        </nav>
      </header>
    </>
  );
}
