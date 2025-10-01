const interval = setInterval(() => {
  const btnOpenNavBar = document.querySelector(".open-nav-bar");
  if (btnOpenNavBar) {
    clearInterval(interval);
    const navBar = document.querySelector(".nav-bar");
    const btnCloseNavBar = document.querySelector(".close-nav-bar");

    btnOpenNavBar.addEventListener("click", () => {
      navBar.classList.toggle("hidden");
    });

    btnCloseNavBar.addEventListener("click", () => {
      navBar.classList.toggle("hidden");
    });

    document.addEventListener("click", (event) => {
      const clickNavBar = navBar.contains(event.target);
      const clickBtnOpen = btnOpenNavBar.contains(event.target);

      if (!clickNavBar && !clickBtnOpen) {
        navBar.classList.add("hidden");
      }
    });
  }
}, 100);
