const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const year = document.querySelector("#year");
const consultationForm = document.querySelector(".contact-form");

if (year) {
  year.textContent = new Date().toLocaleDateString("fa-IR", { year: "numeric" });
}

navToggle?.addEventListener("click", () => {
  const isExpanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isExpanded));
  navLinks?.classList.toggle("nav-links--open", !isExpanded);
});

navLinks?.addEventListener("click", (event) => {
  const target = event.target;

  if (target instanceof HTMLAnchorElement) {
    navToggle?.setAttribute("aria-expanded", "false");
    navLinks.classList.remove("nav-links--open");
  }
});

consultationForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  consultationForm.classList.add("contact-form--submitted");
});
