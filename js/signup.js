const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

const form = document.getElementById("signup-form");
console.log(form);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(form.elements[0].value);
  console.log("Signup");

  db.collection("users").add({
    name: form.elements[0].value,
    email: form.elements[1].value,
    phone: form.elements[2].value,
    medid: form.elements[3].value,
  });

  setTimeout(function () {
    window.location.href = "http://127.0.0.1:5501/FrontEnd/listing.html";
  }, 3000);

  // db.collection("doctors")
  //   .get()
  //   .then((snapshot) => {
  //     snapshot.forEach((doc) => {
  //       console.log(doc.data());
  //     });
  //   });
});
