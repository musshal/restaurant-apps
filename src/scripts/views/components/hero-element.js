class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
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
          font-family: "Comic Sans MS", "Comic Sans", sans-serif;
          color: white;
        }

        .jumbotron__content {
          margin-bottom: 16px;
        }

        .jumbotron__header {
          font-size: 25px;
          letter-spacing: 1px;
        }

        .title-text {
          color: black;
          background-color: white;
          padding: 0 5px;
          border-radius: 15px;
        }

        .jumbotron__sub-header {
          font-weight: unset;
          letter-spacing: 3px;
          padding: 32px 0;
          
        }

        .btn {
          border-radius: 25px;
          padding: 11px;
          box-sizing: border-box;
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

        @media screen and (max-width: 465px) {
          .jumbotron__header, .jumbotron__sub-header {
            font-size: 15px;
          }
        }
      </style>

      <div class="jumbotron">
        <div class="jumbotron__content" tabIndex="0">
          <h1 class="jumbotron__header">LuweRene is the best <span class="title-text">Restaurant Finder</span></h1>
          <h2 class="jumbotron__sub-header">Kami akan membantu kamu <br /> untuk mencari restoran terbaik <br /> di sekitarmu dengan mudah. <br /> Gaskuy!</h2>
        </div>
        <a href="#search" class="btn">Cari Restoran</a>
      </div>`;
  }
}

customElements.define('hero-element', HeroElement);
