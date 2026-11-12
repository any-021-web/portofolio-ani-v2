
const themeToggle = document.getElementById("theme-toggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

function updateThemeIcon() {
    if (!themeToggle) return;

    themeToggle.textContent =
        document.body.classList.contains("dark-mode") ? "☀" : "☾";
}

updateThemeIcon();

themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const currentTheme =
        document.body.classList.contains("dark-mode") ? "dark" : "light";

    localStorage.setItem("theme", currentTheme);
    updateThemeIcon();
});
