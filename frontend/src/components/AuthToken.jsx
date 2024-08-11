export default function AuthToken() {
  const token = localStorage.getItem("authToken");
  const auth = Boolean(token);
  return { auth, token };
}
