const content = document.querySelector(".content");
console.log(content);

content.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("BOOK");

  db.collection("bookings").add({
    patientName: "Manish Chawla",
    patientEmail: "manish@mail.com",
    patientContact: "+91 1234567890",
    doctorName: "Dr. Rajan Kumar",
    price: 599,
  });

  setTimeout(function () {
    window.location.href = "http://127.0.0.1:5501/FrontEnd/checkout.html";
  }, 3000);
});
