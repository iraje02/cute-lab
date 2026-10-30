(function () {
  const content = window.CUTE_LAB_CONTENT;
  const navList = document.querySelector("#primary-nav");
  const teamGrid = document.querySelector("#team-grid");
  const menuToggle = document.querySelector(".menu-toggle");
  const year = document.querySelector("#year");

  function createElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text) element.textContent = text;
    return element;
  }

  function renderNavigation() {
    content.teams.forEach((team) => {
      const item = createElement("li", "nav-item has-dropdown");
      const link = createElement("a", "nav-link", team.name);
      link.href = team.href;
      link.setAttribute("aria-haspopup", "true");
      link.setAttribute("aria-expanded", "false");

      const menu = createElement("ul", "dropdown-menu");
      menu.setAttribute("aria-label", `${team.name} sections`);

      team.sections.forEach((section) => {
        const dropdownItem = document.createElement("li");
        const dropdownLink = createElement("a", "dropdown-link", section.label);
        dropdownLink.href = section.href;
        dropdownItem.append(dropdownLink);
        menu.append(dropdownItem);
      });

      item.append(link, menu);
      navList.append(item);
    });

    const posterItem = document.createElement("li");
    const posterLink = createElement("a", "nav-link", "Poster");
    posterLink.href = "#poster";
    posterItem.append(posterLink);
    navList.append(posterItem);
  }

  function renderTeamCards() {
    const fragment = document.createDocumentFragment();

    content.teams.forEach((team) => {
      const article = createElement("article", "team-card");
      article.id = `${team.id}-team`;
      article.dataset.team = team.id;

      const figure = createElement("figure", "team-figure");
      const visual = createElement("div", `team-art ${team.visualKey}`);
      visual.setAttribute("role", "img");
      visual.setAttribute("aria-label", `${team.name} placeholder visual`);
      figure.append(visual);

      const body = createElement("div", "team-card-body");
      const label = createElement("p", "card-label", team.label);
      const title = createElement("h3", null, team.name);
      const summary = createElement("p", "card-summary", team.summary);
      const button = createElement("a", "button team-button", team.buttonText);
      button.href = team.href;

      body.append(label, title, summary, button);
      article.append(figure, body);
      fragment.append(article);
    });

    teamGrid.append(fragment);
  }

  function wireMobileNavigation() {
    menuToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("open");
      document.body.classList.toggle("nav-open", isOpen);
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });

    navList.addEventListener("click", (event) => {
      const target = event.target.closest("a");
      if (!target) return;
      navList.classList.remove("open");
      document.body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    });
  }

  renderNavigation();
  renderTeamCards();
  wireMobileNavigation();

  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
