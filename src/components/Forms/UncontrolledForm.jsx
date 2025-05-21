import React from "react";

const UncontrolledForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <span>Name</span>
          <br />
          <input type="text" placeholder="Name" name="username" />
        </label>
        <br />
        <label htmlFor="">
          <span>Email</span>
          <br />
          <input type="text" placeholder="Email" name="email" />
        </label>
        <br />
        <label htmlFor="">
          <span>Password</span>
          <br />
          <input type="text" placeholder="Password" name="password" />
        </label>
        <br />
        <button type="submit"> register</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
