import { useState } from "react";
import Header from "../components/Header";
import "../assets/css/Register.css";
import SubmitBtn from "../components/SubmitBtn";
import Loader from "../components/Loader";

export default function RegisterPage() {
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
  const registerUser = async () => {
    setLoader(true);
    try {
      const data = {
        username: username,
        password: password,
      };
      const req = await fetch("http://127.0.0.1:3000/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = await req.json();
      if (body.status === "error") {
        setNotification("");
        setError(body.message);
        hideLoader();
      } else {
        setError("");
        hideLoader();
        setNotification(body.message);
      }
      console.log(body);
    } catch (err) {
      console.log(err);
      hideLoader();
      setNotification("");
      setError("User register failed");
    }
  };
  return (
    <>
      <Header />
      {loader && <Loader />}
      <main className="main">
        <section className="main__register">
          <form
            action=""
            className="main__register--form"
            onSubmit={(e) => {
              e.preventDefault();
              registerUser();
              setLoader(true);
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
            <SubmitBtn action={"Register"} />
          </form>
        </section>
      </main>
    </>
  );
}
