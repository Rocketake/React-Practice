import React, { useState } from "react";

const Form = () => {
  const INITIAL_VALUES = {
    username: "",
    email: "",
    password: "",
  };

  const [values, setValues] = useState(INITIAL_VALUES);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    setValues(INITIAL_VALUES);
  };

  const handleChange = (e) => {
    setValues(() => ({ ...values, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
          <br />
          <input
            value={values.username}
            onChange={handleChange}
            type="text"
            placeholder="Name"
            name="username"
          />
        </label>
        <br />
        <label htmlFor="">
          <span>Email</span>
          <br />
          <input
            value={values.email}
            onChange={handleChange}
            type="text"
            placeholder="Email"
            name="email"
          />
        </label>
        <br />
        <label htmlFor="">
          <span>Password</span>
          <br />
          <input
            value={values.password}
            onChange={handleChange}
            type="text"
            placeholder="Password"
            name="password"
          />
        </label>
        <br />
        <button type="submit"> register</button>
      </form>
    </div>
  );
};

export default Form;
