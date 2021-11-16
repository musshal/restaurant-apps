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

        .footer-wrapper {
          margin: auto;
          max-width: 1170px;
          width: 100%;
          display: flex;
          padding: 20px 32px;
          justify-content: space-between;
        }

        h2 {
          margin-bottom: 15px;
        }

        p {
          margin-bottom: 15px;
        }

        .social__links a {
          padding: 12px 0;
        }

        .social__links a:hover {
          opacity: 0.8;
        }

        .list__menu {
          display: flex;
          flex-direction: column;
          padding: 0 1px;
        }

        .list__menu a {
          text-decoration: none;
          color: #a3a1aa;
          padding: 12px 0;
          margin-top: -15px;
        }

        .list__menu a:hover {
          text-decoration: underline;
        }

        .copyright {
          text-align: center;
          padding: 20px;
          border-top: 1px solid #dee2e6;
        }

        .luwe-text {
          color: #bf1722;
          font-weight: bolder;
        }

        .rene-text {
          color: burlywood;
          font-weight: bolder;
        }

        @media screen and (max-width: 800px) {
          .footer-wrapper {
            text-align: center;
            flex-direction: column;
          }

          .footer-wrapper__nav {
            border-top: 1px solid #dee2e6;
            margin-top: 20px;
          }

          .footer-wrapper__nav h2 {
            margin-top: 20px;
          }

          .list__menu {
            flex-direction: row;
            justify-content: center;
            gap: 15px;
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
            <a href="#/restaurant">Home</a>
            <a href="#/favorite">Favorite</a>
            <a href="https://www.linkedin.com/in/musshal/" target="_blank">About Us</a>
          </div>
        </div>
      </div>
      <p tabIndex="0" class="copyright">Copyright &copy; 2021 - <span class="luwe-text">Luwe</span><span class="rene-text">Rene</span></p>`;
  }
}

customElements.define("foot-bar", FootBar);
