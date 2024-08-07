import links from "../Links";
import "../assets/css/MobileHeader.css";

export default function MobileHeader() {
  return (
    <div className="mobileHeader">
      <ul className="mobileHeader__list">
        {links.map((link, index) => {
          const { path, url } = link;
          return (
            <li className="mobileHeader__list--item" key={index}>
              <a href={url} className="mobileHeader__list--link">
                {path}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
