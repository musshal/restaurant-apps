class FootBar extends HTMLElement {
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
        :host {
          color: #a3a1aa;
        }

        :host > p {
          text-align: center;
          font-weight: bolder;
          padding: 20px;
          border-top: 1px solid #dee2e6;
        }

        .footer-wrapper {
          margin: auto;
          max-width: 1170px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .footer-wrapper__info,
        .footer-wrapper__nav {
          padding: 0 32px;
        }

        .social__links {
          margin-top: 45px;
        }

        .social__links a {
          padding: 12px 3px;
        }

        .social__links a:hover {
          border-bottom: 1px solid #a3a1aa;
        }

        .list__menu {
          display: flex;
          flex-direction: column;
          padding: 0 1px;
        }

        a {
          padding: 0 0 23px;
        }

        .list__menu a {
          text-decoration: none;
          color: #a3a1aa;
        }

        .list__menu a:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 800px) {
          .footer-wrapper {
            text-align: center;
            flex-direction: column;
          }

          .footer-wrapper__nav {
            border-top: 1px solid #dee2e6;
            margin-top: 32px;
          }

          .list__menu {
            flex-direction: row;
            justify-content: center;
            gap: 15px;
            margin-bottom: 10px;
          }
        }
      </style>

      <div class="footer-wrapper">
        <div class="footer-wrapper__info">
          <h2 tabIndex="0">LuweRene</h2>
          <p tabIndex="0">Dapatkan kemudahan mencari restoran terbaik di sekitarmu dengan LuweRene.</p>
          <div class="social__links">
            <a href="#"><img src="logos/Icon_Facebook.svg" alt="facebook" width="44px"></a>
            <a href="#"><img src="logos/instagram-circle.svg" alt="instagram" width="44px"></a>
            <a href="#"><img src="logos/Icon_Twitter.svg" alt="twitter" width="44px"></a>
          </div>
        </div>
        <div class="footer-wrapper__nav">
          <h2 tabIndex="0">Menu</h2>
          <div class="list__menu">
            <a href="/">Home</a>
            <a href="#">Favorite</a>
            <a href="https://www.linkedin.com/in/musshal/" target="_blank">About Us</a>
          </div>
        </div>
      </div>
      <p tabIndex="0">Copyright &copy; 2021 - LuweRene</p>`;
  }
}

customElements.define("foot-bar", FootBar);
