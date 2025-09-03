document.addEventListener("DOMContentLoaded", () => {
  const toggleButtons = document.querySelectorAll(".toggle-bio");

  toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
      const bioMore = button.previousElementSibling;

      if (bioMore.style.display === "block") {
        bioMore.style.display = "none";
        button.textContent = "Ver más";
      } else {
        bioMore.style.display = "block";
        button.textContent = "Ver menos";
      }
    });
  });
});
