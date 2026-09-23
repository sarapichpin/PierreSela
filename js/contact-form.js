(function () {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const lang = document.documentElement.lang === "en" ? "en" : "fr";
  const status = document.getElementById("cf-status");
  const submitBtn = document.getElementById("cf-submit");

  const t = {
    fr: {
      notConfigured: "Formulaire non configuré : ajoutez votre clé Web3Forms dans js/contact-form.js.",
      sending: "Envoi en cours…",
      success: "Merci, votre message a bien été envoyé !",
      error: "Une erreur est survenue. Merci de réessayer dans un instant.",
      submit: "Envoyer le message",
    },
    en: {
      notConfigured: "Form not configured: add your Web3Forms key in js/contact-form.js.",
      sending: "Sending…",
      success: "Thank you, your message has been sent!",
      error: "Something went wrong. Please try again in a moment.",
      submit: "Send message",
    },
  }[lang];

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    if (form.access_key.value === "YOUR_WEB3FORMS_ACCESS_KEY") {
      status.textContent = t.notConfigured;
      status.className = "form-status is-error";
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = t.sending;
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
        status.textContent = t.success;
        status.className = "form-status is-success";
      } else {
        throw new Error(result.message || "Unknown error");
      }
    } catch (err) {
      status.textContent = t.error;
      status.className = "form-status is-error";
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = t.submit;
    }
  });
})();
