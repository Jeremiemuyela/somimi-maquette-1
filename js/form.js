/* Formulaire contact — prêt à brancher Formspree / EmailJS / API.
   Honeypot : champ website_url. */
(function () {
  var form = document.querySelector("[data-contact-form]");
  if (!form) return;

  var status = form.querySelector("[data-form-status]");
  var emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function show(msg, ok) {
    if (!status) return;
    status.textContent = msg;
    status.className = ok
      ? "mt-4 text-sm text-[#163A5F]"
      : "mt-4 text-sm text-[#8a2b2b]";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    if ((data.get("website_url") || "").trim()) {
      show("Message enregistré. Nous vous répondrons sous peu.", true);
      form.reset();
      return;
    }

    var name = (data.get("name") || "").trim();
    var email = (data.get("email") || "").trim();
    var message = (data.get("message") || "").trim();

    if (name.length < 2) return show("Veuillez indiquer votre nom complet.");
    if (!emailRe.test(email)) return show("Veuillez indiquer un e-mail valide.");
    if (message.length < 12) return show("Le message doit contenir au moins 12 caractères.");

    // TODO: POST vers Formspree / EmailJS / endpoint Odoo.
    show("Votre message a bien été préparé. Branchez l’API d’envoi pour la mise en production.", true);
    form.reset();
  });
})();
