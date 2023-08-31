const hamburgerEl = document.querySelector(".hamburger") as HTMLDivElement;

hamburgerEl.addEventListener("click", () => {
  document.querySelector(".nav-links")!.classList.toggle("expanded");
});
