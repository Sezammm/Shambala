document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".main-nav");
  const menuToggle = document.querySelector(".menu-toggle");
  const chatWidget = document.querySelector(".chat-widget");
  const modal = document.querySelector(".modal");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  function openMenu() {
    if (nav) nav.classList.add("open");
  }

  function closeMenu() {
    if (nav) nav.classList.remove("open");
  }

  function toggleMenu() {
    if (nav) nav.classList.toggle("open");
  }

  function openChat() {
    if (chatWidget) chatWidget.classList.add("open");
  }

  function closeChat() {
    if (chatWidget) chatWidget.classList.remove("open");
  }

  function openModal(title, text) {
    if (!modal || !modalTitle || !modalText) return;
    modalTitle.textContent = title || "";
    modalText.textContent = text || "";
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      toggleMenu();
    });
  }

  document.addEventListener("click", (e) => {
    const navLink = e.target.closest(".main-nav a");
    if (navLink) {
      closeMenu();
    }

    const chatOpenBtn = e.target.closest("[data-chat-open]");
    if (chatOpenBtn) {
      openChat();
    }

    const chatCloseBtn = e.target.closest("[data-chat-close]");
    if (chatCloseBtn) {
      closeChat();
    }

    const learnMoreBtn = e.target.closest("[data-full-text]");
    if (learnMoreBtn) {
      openModal(
        learnMoreBtn.dataset.title || "",
        learnMoreBtn.dataset.fullText || ""
      );
    }

    if (e.target === modal) {
      closeModal();
    }

    const modalCloseBtn = e.target.closest("[data-modal-close]");
    if (modalCloseBtn) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
      closeChat();
      closeModal();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});