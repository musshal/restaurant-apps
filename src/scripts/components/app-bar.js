class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        app-bar {
          display: flex;
          justify-content: space-between;
        }

        .header__title {
          font-family: Verdana, sans-serif;
        }

        .luwe-text {
          color: #bf1722;
          padding: 3px 0;
        }

        .rene-text {
          color: burlywood;
          padding: 3px 0;
        }
        
        .header__title:hover::after {
          content: '';
          display: block;
          border-bottom: 3px solid burlywood;
          width: 100%;
          margin: auto;
          padding-bottom: 5px;
          margin-bottom: -8px;
        }

        nav {
          font-family: "Segoe UI", sans-serif;
          color: white;
        }

        .nav__item {
          display: inline-block;
          padding: 7px 5px;
          line-height: 30px;
          font-weight: bolder;
        }

        .nav__item a {
          padding: 12px 0; 
        }

        .nav__item a:hover::after {
          content: '';
          display: block;
          border-bottom: 3px solid burlywood;
          width: 50%;
          margin: auto;
          padding-bottom: 5px;
          margin-bottom: -8px;
        }

        a {
          text-decoration: none;
          color: white;
        }

        a:visited {
          color: inherit;
        }

        a:hover {
          cursor: pointer;
        }

        .header__menu {
          font-size: 32px;
          min-width: 44px;
          padding: 5px 0;
          margin: -10px 0;
          display: none;
          text-align: center;
        }

        .menu__drawer {
          display: none;
        }

        @media screen and (max-width: 510px) {
          .header__menu {
            display: block;
          }

          .menu__drawer {
            display: flex;
            width: 100%;
            padding: 20px 32px;
            justify-content: space-between;
            border-bottom: 1px solid #dee2e6;
            font-size: 21px;
            margin: 10px 0;
          }

          .drawer {
            left: 0;
            top: 0;
            width: 100%;
            height: 250px;
            position: absolute;
            background-color: #f3f7f9;
            color: #52525B;
            display: flex;
            flex-direction: column;
            transform: translate(0, -250px);
            transition: transform .3s ease-in-out;
          }

          .open {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
          }

          .drawer.open {
            transform: translate(0, 0);
          }

          .nav__item {
            text-align: center;
          }

          .nav__item a {
            color: #52525B;
          }

          .nav__item:hover::after {
            width: 0;
          }

          .header__title:hover::after {
            width: 0;
          }
        }
      </style>
      
      <div class="header__inner">
        <h1 class="header__title">
          <a href="/#"><span class="luwe-text">Luwe</span><span class="rene-text">Rene</span></a>
        </h1>
      </div>
      
      <nav>
        <a href="#drawer" id="menu_open" class="header__menu">☰</a>
        <ul id="drawer" class="drawer">
          <div class="menu__drawer">
            <h1 class="header__title">
              <a href="/"><span class="luwe-text">Luwe</span><span class="rene-text">Rene</span></a>
            </h1>
            <a href="#drawer" id="menu_close" class="header__menu">✖</a>
          </div>
          <li class="nav__item">
            <a href="/#/restaurant">Home</a>
          </li>
          <li class="nav__item">
            <a href="/#/favorite">Favorite</a>
          </li>
          <li class="nav__item">
            <a href="https://www.linkedin.com/in/musshal/" target="_blank">About Us</a>
          </li>
        </ul>
      </nav>`;
  }
}

customElements.define("app-bar", AppBar);
