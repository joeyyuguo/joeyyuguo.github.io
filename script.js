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

document.querySelectorAll(".avatar img").forEach((image) => {
  const showPhoto = () => image.closest(".avatar")?.classList.add("has-photo");

  if (image.complete && image.naturalWidth > 0) {
    showPhoto();
  } else {
    image.addEventListener("load", showPhoto, { once: true });
  }
});

document.querySelectorAll("[data-photo-frame]").forEach((frame) => {
  const image = frame.querySelector("img");
  if (!image) return;

  const showPhoto = () => frame.classList.add("has-photo");

  if (image.complete && image.naturalWidth > 0) {
    showPhoto();
  } else {
    image.addEventListener("load", showPhoto, { once: true });
  }
});

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});
