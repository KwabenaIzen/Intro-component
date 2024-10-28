const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const emailAddress = document.getElementById("emailaddress");
const password = document.getElementById("password");
const pattern = /^[a-zA-Z\._\-0-9]*[@][a-zA-Z]*[\.][a-z]{2,3}$/;

const firstnameError = document.getElementById("error__1");
const lastnameError = document.getElementById("error__2");
const emailError = document.getElementById("error__3");
const passError = document.getElementById("error__4");
const namePattern = /^[a-zA-Z]*$/;

const firstImg = document.querySelector(".firstname__error__image1");
const lastImg = document.querySelector(".lastname__error__image2");
const emailImg = document.querySelector(".address__error__image3");
const passImg = document.querySelector(".password__error__image4");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (emailAddress.value === "" || !emailAddress.value.match(pattern)) {
    let example = "email@example/com";
    emailAddress.placeholder = example;
    emailAddress.style.border = "2px solid hsl(0, 100%, 74%)";
    emailError.classList.remove("hidden");
    emailImg.classList.remove("hidden");
  }
  if (firstName.value === "" || !firstName.value.match(namePattern)) {
    // console.log("null");
    firstName.style.border = "2px solid hsl(0, 100%, 74%)";
    firstName.placeholder = "";
    firstnameError.classList.remove("hidden");
    firstImg.classList.remove("hidden");
  }
  if (lastName.value === "" || !lastName.value.match(namePattern)) {
    console.log("none");
    lastName.style.border = "2px solid hsl(0, 100%, 74%)";
    lastnameError.classList.remove("hidden");
    lastImg.classList.remove("hidden");
    lastName.placeholder = "";
  }

  if (password.value === "") {
    console.log("none");
    password.style.border = "2px solid hsl(0, 100%, 74%)";
    password.placeholder = "";
    passError.classList.remove("hidden");
    passImg.classList.remove("hidden");
  }
});
