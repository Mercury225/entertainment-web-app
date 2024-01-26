const checkPassword = () => {
  const passwordValue = document.getElementById("password").value;
  const checkPasswordValue = document.getElementById("repeat-password").value;

  /* passwords match, unlock submit button */
  const changeInsValidated = () => {
    document.getElementById("passwords-match").innerHTML = "Passwords match";
    document.getElementById("passwords-no-match").innerHTML = "";
    document.querySelector(".create-account").disabled = false;
  };
  /* passwords don't match, lock submit button */

  const changeInsNotValidated = () => {
    document.getElementById("passwords-no-match").innerHTML =
      "Passwords don't Match";
    document.getElementById("passwords-match").innerHTML = "";
  };

  if (passwordValue === checkPasswordValue) {
    changeInsValidated();
  } else {
    changeInsNotValidated();
  }
};
