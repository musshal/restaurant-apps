import routes from '../routes/routes';
import UrlParser from '../routes/url-parser';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({
    open, drawer, close, search, content,
  }) {
    this._open = open;
    this._drawer = drawer;
    this._close = close;
    this._search = search;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      open: this._open,
      drawer: this._drawer,
      close: this._close,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
