import links from "../Links";
import "../assets/css/MobileHeader.css";
import AuthToken from "../components/AuthToken";

export default function MobileHeader() {
  const { auth } = AuthToken();

  return (
    <div className="mobileHeader">
      <ul className="mobileHeader__list">
        {!auth ? (
          links.map((link, index) => {
            const { path, url } = link;
            return (
              <li className="mobileHeader__list--item" key={index}>
                <a href={url} className="mobileHeader__list--link">
                  {path}
                </a>
              </li>
            );
          })
        ) : (
          <>
            <li className="mobileHeader__list--item">
              <a
                href="/"
                className="mobileHeader__list--link"
                onClick={() => {
                  localStorage.removeItem("authToken");
                }}
              >
                Log Out
              </a>
            </li>
            <li className="mobileHeader__list--item">
              <a href="/documentation" className="mobileHeader__list--link">
                Documentation
              </a>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
