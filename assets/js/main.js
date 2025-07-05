// 📦 Carnets du Présent – JS principal

document.addEventListener("DOMContentLoaded", () => {
  // ↥ Bouton "Remonter en haut"
  const upBtn = document.createElement("button");
  upBtn.textContent = "↑ Haut";
  upBtn.style.position = "fixed";
  upBtn.style.bottom = "25px";
  upBtn.style.right = "25px";
  upBtn.style.padding = "0.6em 1.2em";
  upBtn.style.background = "#0047AB";
  upBtn.style.color = "#fff";
  upBtn.style.border = "none";
  upBtn.style.borderRadius = "5px";
  upBtn.style.cursor = "pointer";
  upBtn.style.boxShadow = "0 3px 5px rgba(0,0,0,0.2)";
  upBtn.style.zIndex = "1000";

  upBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  document.body.appendChild(upBtn);

  // ✔️ Confirmation d’envoi pour le formulaire de contact
  const contactForm = document.forms["contact"];
  if (contactForm) {
    contactForm.addEventListener("submit", () => {
      alert("Merci pour votre message 💌 Votre requête a bien été envoyée.");
    });
  }

  // 🕒 Ajouter la date automatiquement dans le footer
  const footer = document.querySelector("footer");
  if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML += `<br><small>Site actualisé en ${year}</small>`;
  }
});
