(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const status = document.getElementById("cf-status");
  const submitBtn = document.getElementById("cf-submit");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.access_key.value === "YOUR_WEB3FORMS_ACCESS_KEY") {
      status.textContent = "Formulaire non configuré : ajoutez votre clé Web3Forms dans js/contact-form.js.";
      status.className = "form-status is-error";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours…";
    status.textContent = "";
    status.className = "form-status";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        status.textContent = "Merci, votre message a bien été envoyé !";
        status.className = "form-status is-success";
      } else {
        throw new Error(result.message || "Erreur inconnue");
      }
    } catch (err) {
      status.textContent = "Une erreur est survenue. Merci de réessayer dans un instant.";
      status.className = "form-status is-error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Envoyer le message";
    }
  });
})();
