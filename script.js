const page = document.body.dataset.page;
const activeLink = document.querySelector(`[data-nav="${page}"]`);

if (activeLink) {
  activeLink.classList.add("active");
  activeLink.setAttribute("aria-current", "page");
}

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("open", !open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelector("[data-print-cv]")?.addEventListener("click", () => window.print());
