import useFormHook from "./CustomUserDataHook";

export const CustomUserData = () => {
  const { formValues, handleInputChange } = useFormHook();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call API or perform other actions with formValues
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleInputChange}
          required
          autoComplete="username"
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
          required
          autoComplete="new-password"
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
