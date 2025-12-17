


document.getElementById("searchBtn").onclick = function () {
  let q = document.getElementById("caregiverSearch").value.toLowerCase();

  // select ALL caregiver cards inside carousel
  let cards = document.querySelectorAll(".caregiver-card");

  cards.forEach(card => {
    let text = card.innerText.toLowerCase();   // includes name, qualification, rating, etc.

    // show card if it matches search
    card.style.display = text.includes(q) ? "" : "none";
  });
};


document.getElementById("caregiverSearch").addEventListener("keyup", function(e){
  if (e.key === "Enter") {
    document.getElementById("searchBtn").click();
  }
});



// contact js

document.querySelector(".contact-btn").onclick = function (e) {
  e.preventDefault(); // prevent page reload

  let nameInput = document.querySelector('input[placeholder="Your Name"]');
  let emailInput = document.querySelector('input[placeholder="Email Address"]');
  let phoneInput = document.querySelector('input[placeholder="Phone Number"]');
  let messageInput = document.querySelector('textarea[placeholder="Your Message"]');

  let name = nameInput.value.trim();
  let email = emailInput.value.trim();
  let phone = phoneInput.value.trim();
  let message = messageInput.value.trim();

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  let emailCheck = /\S+@\S+\.\S+/;
  if (!emailCheck.test(email)) {
    alert("Enter a valid email address.");
    return;
  }

  if (phone.length < 10) {
    alert("Enter a valid phone number.");
    return;
  }

  alert("Message sent successfully!");

  // ✅ Immediately reset fields
  nameInput.value = "";
  emailInput.value = "";
  phoneInput.value = "";
  messageInput.value = "";
};
