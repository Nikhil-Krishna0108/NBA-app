import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="login content-section">
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <div className="card mx-auto">
              <div className="card-body">
                <h1
                  className="card-title"
                  style={{ borderBottom: "1px solid #efefef" }}
                >
                  Login to access criterias
                </h1>
                <Form />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedin, setLoggedin] = useState(false);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  const login = (email, password) => {
    if (email === "admin@dsce.com" && password === "admin") {
      localStorage.setItem("token", "askdjaksjdla");
      setLoggedin(true);
      if (loggedin) {
        return navigate("/dashboard");
      }
    } else {
      window.alert("Incorrect email and password");
    }
  };

  return (
    <form className="needs-validation" noValidate onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          required
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
      <NavLink to={"/home"}>
        <button type="button" className="btn btn-secondary float-right">
          Cancel
        </button>
      </NavLink>
    </form>
  );
};

export default Login;
