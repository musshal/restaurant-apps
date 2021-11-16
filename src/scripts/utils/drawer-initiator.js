const DrawerInitiator = {
  init({ open, drawer, close }) {
    open.addEventListener("click", (event) => {
      this._openDrawer(event, drawer);
    });

    close.addEventListener("click", (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _openDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add("open");
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("open");
  },
};

export default DrawerInitiator;
