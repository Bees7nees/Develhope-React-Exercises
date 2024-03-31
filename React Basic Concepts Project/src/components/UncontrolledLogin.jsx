export function UncontrolledLogin() {
  async function HandleFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember"),
    };

    console.log(data);
  }

  return (
    <form
      onSubmit={HandleFormSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <h2>Uncontrolled Login</h2>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="remember" />
      <button type="submit">Login</button>
      <button type="reset">Clear</button>
    </form>
  );
}
