const content = document.querySelector(".content");
const card = document.querySelector(".card");

content.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e);
  card.style.display = "none";
});
