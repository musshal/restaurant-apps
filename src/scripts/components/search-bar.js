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
        margin-top: 28px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        padding: 5px;
        border-radius: 20px;
        display: flex;
        position: sticky;
      }
      
      .search-container > input {
        width: 250px;
        padding: 15px;
        border: 0;
        font-weight: bold;
        background-color: #f3f7f9;
        color: #52525b
      }
      
      .search-container > input:focus {
        outline: 0;
      }

      .search-container >  input::placeholder {
        font-weight: normal;
      }
      
      .search-container > input:focus::placeholder {
        font-weight: bold;
      }
      
      .search-input:hover::-webkit-search-cancel-button{
        cursor: pointer;
      }

      @media screen and (max-width: 600px) {
        .search-container {
          position: static;
          width: 100%;
          margin-top: 0;
          margin-bottom: 28px;
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
