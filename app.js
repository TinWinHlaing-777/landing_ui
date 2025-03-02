const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check local storage for theme preference
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("light-theme");
  themeToggle.textContent = "Change Dark";
} else {
  themeToggle.textContent = "Change Light";
}

// Toggle theme on button click
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "Change Dark";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "Change Light";
  }
});
