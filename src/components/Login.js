import React, { useState } from "react";
import "./Login.css";

function Login({ onSwitch }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert("Logged in successfully!");
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Don't have an account?{" "}
        <button className="btn-link" onClick={onSwitch}>
          Sign Up
        </button>
      </p>
    </div>
  );
}

function SignUp({ onSwitch }) {
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    alert("Signed up successfully!");
  };

  return (
    <div className="form-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="form-group">
          <label>First Name:</label>
          <input
            type="text"
            className="form-control"
            value={fName}
            onChange={(e) => setfName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            className="form-control"
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </form>
      <p>
        Already have an account?{" "}
        <button className="btn-link" onClick={onSwitch}>
          Login
        </button>
      </p>
    </div>
  );
}

function LoginSignUp() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="container">
      {
        showLogin ? (
          <Login onSwitch={() => setShowLogin(false)} />
        ) : (
          <SignUp onSwitch={() => setShowLogin(true)} />
      )}
    </div>
  );
}

export default LoginSignUp;
