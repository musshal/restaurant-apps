class LoaderRestaurants extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="wrapper">
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
        <div class="card is-loading">
          <div class="image"></div>
          <div class="content">
            <h2></h2>
            <div class="flex-container">
              <h3 class="left"></h3>
              <h3 class="right"></h3>
            </div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>`;
  }
}

customElements.define('loader-restaurants', LoaderRestaurants);
