const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    console.log(login, password);

    console.log(login.value, password.value);

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
