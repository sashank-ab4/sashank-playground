export const validation = (username, password) => {
  const errors = {};
  if (!username.trim()) {
    errors.username = "Enter the username";
  } else if (username.length < 3) {
    errors.username = "Username must be atleast 3 Characters!";
  }

  if (!password) {
    errors.password = "Enter the Password";
  } else if (password.length < 8) {
    errors.password = "Password must be 8 characters Long!";
  } else if (!/[A-Z]/.test(password)) {
    errors.password = "Password must Contain Capital Letter";
  } else if (!/[a-z]/.test(password)) {
    errors.password = "Password must Contain Small Letter";
  } else if (!/[0-9]/.test(password)) {
    errors.password = "Password must Contain Numeric Value";
  } else if (!/[!@#$%^&*]/.test(password)) {
    errors.password = "Password must Contain any of these !@#$%^&*  Character";
  }
  return errors;
};
