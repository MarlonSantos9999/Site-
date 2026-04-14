const form = document.querySelector("#contactForm");
const feedback = document.querySelector("#formFeedback");

function showFeedback(message, type) {
  feedback.textContent = message;
  feedback.className = `form-feedback ${type}`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (!name || !email || !message) {
    showFeedback("Preencha todos os campos antes de enviar.", "error");
    return;
  }

  if (!isValidEmail(email)) {
    showFeedback("Digite um e-mail válido.", "error");
    return;
  }

  showFeedback("Mensagem enviada com sucesso! Obrigado pelo contato.", "success");
  form.reset();
});
