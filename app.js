(function () {
  [...document.querySelectorAll(".control")].forEach((button) => {
    button.addEventListener("click", function () {
      document.querySelector(".active-btn").classList.remove("active-btn");
      this.classList.add("active-btn");
      document.querySelector(".active").classList.remove("active");
      document.getElementById(button.dataset.id).classList.add("active");
    });
  });

  const themeBtn = document.querySelector(".theme-btn");
  const themeIcon = themeBtn.querySelector("i");

  function applyTheme(isLight) {
    document.body.classList.toggle("light-mode", isLight);
    themeIcon.classList.toggle("fa-moon", !isLight);
    themeIcon.classList.toggle("fa-sun", isLight);
  }

  const savedTheme = (() => {
    try {
      return localStorage.getItem("theme");
    } catch (e) {
      return null;
    }
  })();
  applyTheme(savedTheme === "light");

  themeBtn.addEventListener("click", () => {
    const isLight = !document.body.classList.contains("light-mode");
    applyTheme(isLight);
    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch (e) {
      /* ignore storage errors (private browsing, etc.) */
    }
  });
})();


