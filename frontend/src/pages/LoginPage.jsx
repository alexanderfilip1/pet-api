import { useState } from "react";
import Header from "../components/Header";
import SubmitBtn from "../components/SubmitBtn";
import "../assets/css/Login.css";
import Loader from "../components/Loader";
import AuthToken from "../components/AuthToken";
import { Navigate } from "react-router-dom";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [loader, setLoader] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const auth = AuthToken();

  const hideLoader = () => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  };
  const sendData = async () => {
    setLoader(true);
    const data = {
      username: username,
      password: password,
    };
    try {
      const req = await fetch("http://127.0.0.1:3000/api/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await req.json();
      console.log(res);
      if (res.status === "success") {
        setError("");
        localStorage.setItem("authToken", res.token);
        hideLoader();
        setNotification("Signed In. Redirecting to home page");
        setTimeout(() => {
          setRedirect(true);
        }, 4000);
      } else {
        hideLoader();
        setError(res.message);
      }
    } catch (err) {
      console.log(err);
      setNotification("");
      hideLoader();
      setError("Incorrect username or password");
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      {loader && <Loader />}
      <div className="wrapper">
        <main className="main">
          <section className="main__login">
            {!auth ? (
              <form
                className="main__login--form"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendData();
                }}
              >
                <label htmlFor="username">
                  Username
                  <input
                    type="text"
                    id="username"
                    className="inputField"
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    id="password"
                    className="inputField"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </label>
                <p className="error">{error}</p>
                <p className="notification">{notification}</p>
                <SubmitBtn action={"Login"} />
              </form>
            ) : (
              <h1 style={{ textAlign: "center" }}>
                You&apos;re already logged in.
              </h1>
            )}
          </section>
        </main>
      </div>
    </>
  );
}
