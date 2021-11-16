const Favorite = {
  async render() {
    return `
      <section class="content">
        <div class="content__header">
          <h1 tabindex="0" class="content__title">Restoran Favorit</h1>
          <search-bar></search-bar>
        </div>
        <div id="restaurants" class="restaurants"></div>
      </section>`;
  },

  async afterRender() {},
};

export default Favorite;
