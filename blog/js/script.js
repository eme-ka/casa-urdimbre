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

window.addEventListener('load', function () {
  if (!location.hash) return;
  var id = decodeURIComponent(location.hash.slice(1));
  var el = document.getElementById(id);
  if (!el) return;
  // small delay to let any late layout shifts finish
  setTimeout(function () {
    el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 30);
});
