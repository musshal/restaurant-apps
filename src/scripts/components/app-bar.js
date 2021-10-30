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
          font-family: Geneva, Verdana, sans-serif;
        }

        .luwe-text {
          color: #bf1722;
          min-width: 44px;
          min-height: 44px;
          width: 100%;
        }

        .rene-text {
          color: burlywood;
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

        .nav {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          color: white;
        }

        .nav__item {
          display: inline-block;
          padding: 0 5px;
          line-height: 35px;
          font-weight: bolder;
        }

        .nav__item:hover::after {
          content: '';
          display: block;
          border-bottom: 3px solid burlywood;
          width: 50%;
          margin: auto;
          padding-bottom: 5px;
          margin-bottom: -8px;
        }

        ul {
          min-width: 44px;
          min-height: 44px;
          width: 100%;
        }

        .nav__item li {
          min-width: 44px;
          min-height: 44px;
          width: 100%;
        }

        .nav__item a {
          padding: 15px 0; 
          color: white;
          min-width: 44px;
          min-height: 44px;
          width: 100%;
        }

        a {
          text-decoration: none;
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
          min-height: 44px;
          margin: -5px 0;
          text-align: center;
          display: none;
        }

        .menu__drawer {
          display: none;
          color: white;
        }

        @media screen and (max-width: 510px) {
          .header__menu {
            display: block;
            color: #52525B;
          }

          .menu__drawer {
            display: flex;
            width: 100%;
            padding: 15px;
            justify-content: space-between;
            border-bottom: 1px solid #dee2e6;
            font-size: 21px;
            margin-top: 10px;
          }

          #drawer {
            left: 0;
            top: 0;
            width: 100%;
            height: 200px;
            padding: 10px 15px;
            position: absolute;
            background-color: #f3f7f9;
            color: #52525B;
            text-align: center;
            display: flex;
            flex-direction: column;
            transform: translate(0, -250px);
            transition: transform .3s ease-in-out;
          }

          .open {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
          }

          #drawer.open {
            transform: translate(0, 0);
          }

          .nav__item a {
            padding: 0;
            color: #52525B;
            min-width: 44px;
            min-height: 44px;
            width: 100%;
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
            <a href="#"><span class="luwe-text">Luwe</span><span class="rene-text">Rene</span></a>
          </h1>
        </div>
        
        <nav class="nav">
          <a href="#drawer" id="menu" class="header__menu">☰</a>
          <ul id="drawer">
            <div class="menu__drawer">
              <h1 class="header__title">
                <a href="#"><span class="luwe-text">Luwe</span><span class="rene-text">Rene</span></a>
              </h1>
              <a id="menu" class="header__menu">✖</a>
            </div>
            <li class="nav__item">
              <a href="/">Home</a>
            </li>
            <li class="nav__item">
              <a href="#">Favorite</a>
            </li>
            <li class="nav__item">
              <a href="https://www.linkedin.com/in/musshal/" target="_blank">About Us</a>
            </li>
          </ul>
        </nav>`;
  }
}

customElements.define("app-bar", AppBar);
