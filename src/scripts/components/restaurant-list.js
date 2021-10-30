const data = require("../../DATA.json");

class RestaurantList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <style>
        restaurant-list {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .content-item {
          width: 100%;
          border-radius: 5px;
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        }

        .content-item img {
          width: 100%;
          height: 250px;
          border-radius: 5px;
        }

        .content-item__info {
          padding: 20px;
        }

        .loc__rate {
          display: flex;
          justify-content: space-between;
        }

        .star {
          color: orange;
        }

        .content-item__info h1 {
          font-size: 20px;
        }

        .content-item__info h2,
        .content-item__info h3 {
          font-size: 15px;
          font-weight: unset;
          padding: 10px 0;
        }

        .content-item__info p {
          font-size: 15px;
          height: 100px;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .content-item__info button {
          min-width: 44px;
          min-height: 44px;
          width: 100%;
          padding: 10px;
          letter-spacing: 1px;
          background-color: #bf1722;
          color: white;
          border: 0;
          border-radius: 10px;
          margin-top: 15px;
          box-shadow: 0 3px #8b0000;
        }
        
        .content-item__info button:hover {
          cursor: pointer;
          opacity: 0.8;
        }

        .content-item__info > button:active {
          position: relative;
          top: 3px;
          box-shadow: none;
        }

        @media screen and (max-width: 1000px) {
          restaurant-list {
            grid-template-columns: repeat(2, 1fr);
          }
        }
  
        @media screen and (max-width: 600px) {
          restaurant-list {
            grid-template-columns: repeat(1, 1fr);
          }
        }

      </style>`;

    for (let restaurant in data.restaurants) {
      this.innerHTML += `
        <div class="content-item" id="${data.restaurants[restaurant].id}" tabIndex="0">
          <img src="${data.restaurants[restaurant].pictureId}" alt="">
          <div class="content-item__info">
            <h1>${data.restaurants[restaurant].name}</h1>
            <div class="loc__rate">
              <h2 id="loc">📍 ${data.restaurants[restaurant].city}</h2>
              <h3><span class="star">&#9733;</span> ${data.restaurants[restaurant].rating}</h3>
            </div>
            <p>${data.restaurants[restaurant].description}</p>
            <button>Lihat Selengkapnya</button>
          </div>
        </div>`;
    }
  }
}

customElements.define("restaurant-list", RestaurantList);
