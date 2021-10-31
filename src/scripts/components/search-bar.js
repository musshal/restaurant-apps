class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
      }

      html,
      body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }

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
    
    <div id="searchContainer" class="search-container">
      <input type="search" placeholder="Masukan nama kota Anda berada..." id="searchElement" class="search-input">
    </div>`;
  }
}

customElements.define("search-bar", SearchBar);
