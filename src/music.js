document.getElementById("openBtn").addEventListener("click", function () {
  document.body.classList.remove("no-scroll");
  document.getElementById("content").scrollIntoView({ behavior: "smooth" });
});
