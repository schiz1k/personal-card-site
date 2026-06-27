const copy = {
  ru: {
    eyebrow: "личная визитка",
    name: "Никита Мочальников",
    role: "Проектный менеджер",
    about:
      "Молодой специалист, которого ничего не останавливает. Нравится изучать новое и автоматизировать процессы.",
    linkPoems: "TG паблик со стихами",
    linkTelegram: "TG личная страница",
    linkVk: "VK",
    linkInstagram: "Instagram",
    linkEmail: "Почта",
  },
  en: {
    eyebrow: "personal card",
    name: "Nikita Mochalnikov",
    role: "Project Manager",
    about:
      "A young specialist who does not stop at obstacles. I enjoy learning new things and automating processes.",
    linkPoems: "TG poetry channel",
    linkTelegram: "TG personal page",
    linkVk: "VK",
    linkInstagram: "Instagram",
    linkEmail: "Email",
  },
};

const links = {
  poems: "https://t.me/sch1z0ph",
  telegram: "https://t.me/sch1zoph",
  vk: "https://vk.com/schizoph",
  instagram: "https://instagram.com/___n1k1ta____",
  email: "mailto:mocalnikovnikita94@gmail.com",
};

const setLanguage = (lang) => {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[lang][key];
  });

  document.querySelectorAll("[data-lang-switch]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.langSwitch === lang);
  });
};

document.querySelectorAll("[data-lang-switch]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.langSwitch));
});

document.querySelectorAll("[data-link-key]").forEach((anchor) => {
  const href = links[anchor.dataset.linkKey];
  if (href) {
    anchor.href = href;
    if (href.startsWith("http")) {
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
    }
  }
});
