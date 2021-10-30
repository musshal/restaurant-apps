class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box; 
        }

        html,
        body {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        .jumbotron {
          margin: 75px auto;
          text-align: center;
          font-family: cursive, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: white;
        }

        .jumbotron__header {
          font-size: 25px;
          letter-spacing: 1px;
        }

        .title-text {
          color: black;
          background-color: white;
          padding: 5px;
          border-radius: 15px;
        }

        .jumbotron__sub-header {
          font-weight: unset;
          letter-spacing: 3px;
          padding: 32px 0;
          margin-bottom: 20px;
        }

        .btn {
          border-radius: 20px;
          padding: 10px;
          box-sizing: border-box;
          min-width: 44px;
          min-height: 44px;
          width: 100%;
          color: white;
          background-color: #bf1722;
          letter-spacing: 1px;
          text-decoration: none;
        }

        .btn:hover {
          opacity: .8;
          cursor: pointer;
        }

        @media screen and (max-width: 640px) {
          .jumbotron__header, .jumbotron__sub-header {
            font-size: 18px;
          }
        }
      </style>

      <div class="jumbotron">
        <h1 class="jumbotron__header" tabIndex="0">LuweRene is the best <span class="title-text">Restaurant Finder</span></h1>
        <h2 class="jumbotron__sub-header" tabIndex="0">Kami akan membantu kamu <br /> untuk mencari restoran terbaik <br /> di sekitarmu dengan mudah. <br /> Gaskuy!</h2>
        <a href="#searchElement" class="btn">Cari Restoran</a>
      </div>`;
  }
}

customElements.define("hero-element", HeroElement);
