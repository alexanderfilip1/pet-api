import { useState } from "react";
import Header from "../components/Header";
import "../assets/css/Register.css";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async () => {
    try {
      const data = {
        username: username,
        password: password,
      };
      const req = await fetch("http://127.0.0.1:3000/api/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: data,
      });
      const body = await req.json();
      console.log(body);
    } catch (err) {
      console.log(err);
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
            <button type="submit" className="registerBtn">
              Register
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
