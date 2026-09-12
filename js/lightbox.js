(function () {
  var root = document.querySelector("[data-lightbox]");
  if (!root) return;

  var img = root.querySelector("[data-lightbox-img]");
  var cap = root.querySelector("[data-lightbox-cap]");
  var items = Array.prototype.slice.call(document.querySelectorAll("[data-gallery-item]"));
  var index = 0;

  function open(i) {
    index = i;
    var el = items[index];
    img.src = el.getAttribute("data-full") || el.querySelector("img").src;
    img.alt = el.querySelector("img").alt || "";
    if (cap) cap.textContent = el.getAttribute("data-caption") || img.alt;
    root.classList.add("is-open");
    root.setAttribute("aria-hidden", "false");
    root.querySelector("[data-lightbox-close]").focus();
  }

  function close() {
    root.classList.remove("is-open");
    root.setAttribute("aria-hidden", "true");
    img.removeAttribute("src");
  }

  function step(dir) {
    open((index + dir + items.length) % items.length);
  }

  items.forEach(function (el, i) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      open(i);
    });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open(i);
      }
    });
  });

  root.querySelector("[data-lightbox-close]").addEventListener("click", close);
  root.querySelector("[data-lightbox-prev]").addEventListener("click", function () { step(-1); });
  root.querySelector("[data-lightbox-next]").addEventListener("click", function () { step(1); });
  root.addEventListener("click", function (e) {
    if (e.target === root) close();
  });
  document.addEventListener("keydown", function (e) {
    if (!root.classList.contains("is-open")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
})();
