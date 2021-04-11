import { auth } from "../../../Utils/firebase";

const Login = ({ history }) => {
  const onLoginFormSubmitHandler = (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    auth
      .signInWithEmailAndPassword(username, password)
      .then(() => {
        history.push("/categories");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <section className="login">
      <form onSubmit={onLoginFormSubmitHandler}>
        <fieldset>
          <legend>Login</legend>
          <p className="field">
            <label htmlFor="username">E-mail</label>
            <span className="input">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="E-mail"
              />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <input type="submit" className="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  );
};

export default Login;
