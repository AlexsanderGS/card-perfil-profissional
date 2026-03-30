const body = document.body;

const toggleBt = document.querySelector(".toggle-tema");
const iconTheme = document.querySelector(".icon-theme");

toggleBt.addEventListener("click", () => {
  body.classList.toggle("dark-theme");

  if (body.classList.contains("dark-theme")) {
    iconTheme.setAttribute("src", "../../src/assets/icons/sun.svg");
  } else {
    iconTheme.setAttribute("src", "../../src/assets/icons/moon.svg");
  }
});
