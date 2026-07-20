document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".btn-link");
  links.forEach(link => {
    link.addEventListener("click", () => {
      console.log("Você clicou em:", link.textContent);
    });
  });
});

function voltarParaHome() {
  window.location.href = "index.html";
}

function scrollToTopo() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}