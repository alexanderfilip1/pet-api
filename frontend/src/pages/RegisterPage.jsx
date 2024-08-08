import { useState } from "react";
import Header from "../components/Header";
import "../assets/css/Register.css";
import SubmitBtn from "../components/SubmitBtn";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notification, setNotification] = useState("");

  const registerUser = async () => {
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
        setError(body.message);
      } else {
        setNotification(body.message);
      }
      console.log(body);
    } catch (err) {
      console.log(err);
      setError("User register failed");
    }
  };
  return (
    <>
      <Header />
      <main className="main">
        <section className="main__register">
          <form
            action=""
            className="main__register--form"
            onSubmit={(e) => {
              e.preventDefault();
              registerUser();
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
