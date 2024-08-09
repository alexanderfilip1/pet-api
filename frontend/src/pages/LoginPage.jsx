import React, { useState } from "react";
import Header from "../components/Header";
import SubmitBtn from "../components/SubmitBtn";
import "../assets/css/Login.css";
import Loader from "../components/Loader";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");
  const [loader, setLoader] = useState(false);
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
        localStorage.setItem("authToken", res.token);
        hideLoader();
        setNotification("Signed In");
      }
    } catch (err) {
      console.log(err);
      setNotification("");
      hideLoader();
      setError("Incorrect username or password");
    }
  };
  return (
    <>
      <Header />
      {loader && <Loader />}
      <main className="main">
        <section className="main__login">
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
        </section>
      </main>
    </>
  );
}
