import React, { useState } from "react";
import Header from "../components/Header";
import SubmitBtn from "../components/SubmitBtn";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const sendData = async () => {
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
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Header />
      <main className="main">
        <section className="login__section">
          <form
            onSubmit={() => {
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
                  e.preventDefault();
                  setPassword(e.target.value);
                }}
              />
            </label>
            <SubmitBtn action={"Login"} />
          </form>
        </section>
      </main>
    </>
  );
}
