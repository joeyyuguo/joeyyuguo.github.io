const currentPage = document.body.dataset.page;
const activeLink = document.querySelector(`[data-nav="${currentPage}"]`);

if (activeLink) {
  activeLink.classList.add("active");
  activeLink.setAttribute("aria-current", "page");
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("open", !isOpen);
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
