// Back to Top Button
const backToTopBtn = document.getElementById("backToTop");
window.onscroll = () => {
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Update Year
document.querySelectorAll("#year, #year3, #year4").forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Archive Page Example
const sampleArchive = [
  {
    id: "a1",
    title: "Fall Symposium 2024 — Slides",
    date: "Nov 2024",
    url: "#",
  },
  {
    id: "a2",
    title: "Spring Workshop 2024 — Recording",
    date: "Mar 2024",
    url: "#",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const list = document.getElementById("archiveList");
  if (list) {
    sampleArchive.forEach((a) => {
      const el = document.createElement("div");
      el.className = "archive-item";
      el.innerHTML = `<h3>${a.title}</h3><p>${a.date}</p><p><a href="${a.url}" class="btn">Download</a></p>`;
      list.appendChild(el);
    });
  }
});
