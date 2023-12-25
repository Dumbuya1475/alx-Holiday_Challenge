// Function for the countdown
document.addEventListener("DOMContentLoaded", function () {
	const countdownElement = document.getElementById("countdown");
	const countdown_timer_Element = document.getElementById("countdown_timer");

  function updateCountdown() {
	const now = new Date();
    const targetDate = new Date("January 1, 2024 00:00:00 GMT+00:00");
    const timeDifference = targetDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}`;
	document.getElementById("day_left").innerHTML = "Days Left";
    countdown_timer_Element.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
  }
  setInterval(updateCountdown, 1000);
});

// Function to display wishes when ever the page is refresh
document.addEventListener("DOMContentLoaded", function () {
  const wishes = [
    "May your code compile without errors, and your tests pass on the first try.",
    "May your debugging sessions be short and insightful, leading to elegant solutions.",
    "May your code reviews be constructive, and your pull requests swiftly merged.",
    "May your coffee be strong, your deadlines flexible, and your codebase maintainable.",
    "May your meetings be brief, and your documentation be comprehensive."
  ];
  
  const wishContainer = document.getElementById("wish-container");

  // Display a new wish every minute
  function displayRandomWish() {
    const randomWishIndex = Math.floor(Math.random() * wishes.length);
    wishContainer.textContent = wishes[randomWishIndex];
  }

  // Display a wish immediately and then every 8 sec
  displayRandomWish();
  setInterval(displayRandomWish, 8000); // 60000 milliseconds = 1 minute
});

// Function for the snow animation
// document.addEventListener("DOMContentLoaded", function () {
//   const container = document.body;

//   function createSnowflake() {
//     const snowflake = document.createElement("div");
//     snowflake.className = "snowflake";
//     snowflake.style.left = `${Math.random() * window.innerWidth}px`;
//     container.appendChild(snowflake);

//     snowflake.addEventListener("animationiteration", () => {
//       snowflake.style.left = `${Math.random() * window.innerWidth}px`;
//     });
//   }

//   setInterval(createSnowflake, 100);
// });
