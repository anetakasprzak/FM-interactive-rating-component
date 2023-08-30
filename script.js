const form = document.getElementById("form");
const selected = document.getElementById("selected");
const rating = document.getElementById("rating");
const thankYou = document.getElementById("thank-you");
const input = document.querySelector('input[name="rating-value"]:checked');

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const value = document.querySelector(
    'input[name="rating-value"]:checked'
  )?.value;

  selected.textContent = `You selected ${value} out of 5`;

  thankYou.classList.remove("hidden");
  rating.classList.add("hidden");
});
