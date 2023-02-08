function setupTabs () {
    document.querySelectorAll(".tabs__button").forEach(a => {
      a.addEventListener("click", () => {
        const sidebar = a.parentElement;
        const tabsContainer = sideBar.parentElement;
        const tabID = a.dataset.tabValue;
        const tabToActivate = tabsContainer.querySelector('.tabs__content[id="${tabID}"]');

        sideBar.querySelectorAll(".tabs__button").forEach(a => {
          a.classList.remove("tabs__button--active");
        });

        tabsContainer.querySelectorAll(".tabs__content").forEach(tab => {
          tab.classList.remove("tabs__content--active");
        });

        a.classList.add("tabs__button--active");

        tabToActivate.classList.add("tabs__content--active");

      });
    });
  }

