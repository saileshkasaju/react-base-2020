import React, { useState } from "react";
import { loginPost } from "../../../api";

const Login = () => {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setState(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    loginPost(state)
      .then(res => {
        console.log(res);
      })
      .catch(console.error);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Login;
