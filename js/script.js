    document.addEventListener("DOMContentLoaded", function () {
      const container = document.body;

      function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        container.appendChild(snowflake);

        snowflake.addEventListener("animationiteration", () => {
          snowflake.style.left = `${Math.random() * window.innerWidth}px`;
        });
      }

      setInterval(createSnowflake, 100);
    });