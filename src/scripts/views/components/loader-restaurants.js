class LoaderRestaurants extends HTMLElement {
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

        .wrapper {
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .wrapper .card {
          width: 358.5px;
          height: 520px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        }

        .wrapper .card .content {
          padding: 20px 20px;
        }

        .wrapper .card.is-loading .image,
        h2,
        h3,
        p {
          background: #eee;
          background: linear-gradient(
            110deg,
            #ececec 8%,
            #f5f5f5 18%,
            #ececec 33%
          );
          border-radius: 5px;
          background-size: 200% 100%;
          -webkit-animation: 1.5s shine linear infinite;
          animation: 1.5s shine linear infinite;
        }

        .wrapper .image {
          height: 250px;
          margin-bottom: 10px;
        }

        .wrapper h2 {
          width: 150px;
          height: 25px;
          margin-bottom: 15px;
        }

        .wrapper .flex-container {
          display: flex;
          justify-content: space-between;
        }

        .wrapper .flex-container .left {
          width: 100px;
          height: 20px;
          margin-bottom: 10px;
        }

        .wrapper .flex-container .right {
          width: 50px;
          height: 20px;
          margin-bottom: 10px;
        }

        .wrapper p {
          height: 20px;
          margin-top: 10px;
        }

        @-webkit-keyframes shine {
          to {
            background-position-x: -200%;
          }
        }

        @keyframes shine {
          to {
            background-position-x: -200%;
          }
        }
      </style>

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
