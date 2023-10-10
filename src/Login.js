import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiRequest } from "./ApiRequest";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const secondRespons = await ApiRequest("POST", "user/login", {
        email,
        password,
      }, null);
      console.log(secondRespons);

      navigate("/data");

      // Save the token in local storage or a secure cookie for future requests
      // You can also redirect the user to a protected route or perform other actions upon successful login.
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  return (
    <div>
      {error && <p>{error}</p>}
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
