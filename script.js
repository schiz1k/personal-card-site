const copy = {
  ru: {
    eyebrow: "личная визитка",
    name: "Никита",
    role: "Твоя должность / роль",
    about:
      "Короткий блок о себе: кто ты, чем занимаешься, что создаешь и где с тобой связаться. Здесь можно оставить 2-3 сильные фразы без лишнего шума.",
    linkPoems: "TG паблик со стихами",
    linkTelegram: "TG личная страница",
    linkVk: "VK",
    linkMax: "MAX",
    linkInstagram: "Instagram",
    linkEmail: "Почта",
    linkPhone: "Телефон",
  },
  en: {
    eyebrow: "personal card",
    name: "Nikita",
    role: "Your title / role",
    about:
      "A short block about you: who you are, what you make, and where people can reach you. Keep it sharp, quiet, and direct.",
    linkPoems: "TG poetry channel",
    linkTelegram: "TG personal page",
    linkVk: "VK",
    linkMax: "MAX",
    linkInstagram: "Instagram",
    linkEmail: "Email",
    linkPhone: "Phone",
  },
};

const links = {
  poems: "#",
  telegram: "#",
  vk: "#",
  max: "#",
  instagram: "#",
  email: "mailto:email@example.com",
  phone: "tel:+70000000000",
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
  }
});
