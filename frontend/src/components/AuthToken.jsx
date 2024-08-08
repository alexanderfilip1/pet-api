import { useState, useEffect } from "react";

export default function AuthToken() {
  const [auth, setAuth] = useState(false);
  const [token, setToken] = useState(false);
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    setToken(authToken);
    if (token) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [token]);

  return { auth, token };
}
