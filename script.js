const grid = document.querySelector("[data-pixel-stage] .pixel-grid");

if (grid) {
  const cells = 140;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < cells; index += 1) {
    const cell = document.createElement("span");
    const x = ((index % 7) - 3) * 5;
    const y = (Math.floor(index / 14) % 5 - 2) * 6;
    cell.className = "pixel";
    cell.style.setProperty("--i", index);
    cell.style.setProperty("--x", `${x}px`);
    cell.style.setProperty("--y", `${y}px`);
    fragment.appendChild(cell);
  }

  grid.appendChild(fragment);
}

const menuToggle = document.querySelector("[data-menu-toggle]");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    document.body.classList.toggle("menu-open");
  });
}

document.querySelectorAll(".side-nav a, .top-links a").forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});
