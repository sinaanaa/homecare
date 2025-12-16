

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
