const inputs = document.querySelectorAll(".form__input");
const form = document.querySelector(".form");

const validate = function (e) {
  e.preventDefault();
  checkInputs();
};

form.addEventListener("submit", validate);

const checkInputs = function () {
  inputs.forEach((input) => {
    let attr = input.attributes.name.value;
    let value = input.value;
    let reg = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    if (attr === "username" && value === "") {
      input.parentElement.classList.add("error");
    }
    if (attr === "last-name" && value === "") {
      input.parentElement.classList.add("error");
    }
    if (attr === "email" && value !== "") {
      if (!reg.test(value)) {
        input.parentElement.classList.add("error");
        input.style.color = "rgb(207, 18, 18)";
      }
    }
    if (attr === "password" && value === "") {
      input.parentElement.classList.add("error");
    }
  });
};
