function simpleValidation() {
  const requiredElements = document
    .getElementById("signup-form")
    .querySelectorAll("[required]");
  const errorMessage = document.getElementById("error-message");
  let areRequiredFieldsInvalid = false;
  for (const elem of requiredElements) {
    if (!elem.checkValidity()) {
      areRequiredFieldsInvalid = true;
      break;
    }
  }

  if (areRequiredFieldsInvalid) {
    errorMessage.innerText = "Please fill the required fields with valid data";
    console.log(errorMessage);
  } else {
    errorMessage.innerText = "";
  }
}
