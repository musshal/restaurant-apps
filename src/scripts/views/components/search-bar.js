class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  // set keyupEvent(event) {
  //   this._keyupEvent = event;
  //   this.render();
  // }

  // get value() {
  //   return this.shadowDOM.querySelector("#search").value;
  // }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
          padding: 5px;
          border-radius: 20px;
        }
        
        .search-container > input {
          min-width: 250px;
          min-height: 44px;
          width: 100%;
          padding: 10px;
          border: 0;
          background-color: #f3f7f9;
          color: #52525b
        }
        
        .search-container > input:focus {
          outline: 0;
        }
        
        .search-input:hover::-webkit-search-cancel-button {
          cursor: pointer;
        }

        @media screen and (max-width: 600px) {
          .search-container {
            margin-bottom: 32px;
          }
        
          .search-container > input {
            width: 100%;
          }
        }
      </style>
      
      <div class="search-container">
        <input type="search" placeholder="Masukan nama kota Anda berada..." id="search" class="search-input">
      </div>`;

    // this.shadowDOM
    //   .querySelector("#search")
    //   .addEventListener("keyup", this._keyupEvent);

    /* Pencarian tanpa API */
    this.shadowDOM.querySelector('#search').addEventListener('keyup', () => {
      const input = this.shadowDOM.querySelector('#search').value.toLowerCase();
      const restaurants = document.querySelectorAll('.content-item');

      restaurants.forEach((restaurant) => {
        const restaurantLoc = restaurant.children[1].children[1].children[0].textContent;
        const resto = restaurant;

        if (restaurantLoc.toLowerCase().indexOf(input) !== -1) {
          resto.style.display = 'block';
        } else {
          resto.style.display = 'none';
        }
      });
    });
  }
}

customElements.define('search-bar', SearchBar);
