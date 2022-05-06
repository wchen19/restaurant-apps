/* eslint-disable require-jsdoc */
import routes from '../routes/routes.js';
import UrlParser from '../routes/url-parser.js';
import DrawerInitiator from '../utils/drawer-initiator.js';
import HelpInitiator from '../utils/help-initiator.js';
import SkipInitiator from '../utils/skip-initiator.js';

class App {
  constructor({button, drawer, content, help, skip}) {
    this._button=button;
    this._drawer=drawer;
    this._content=content;
    this._help=help;
    this._skip=skip;

    this._initAppShell();
  }

  _initAppShell() {
    SkipInitiator.init({
      skip: this._skip,
      content: this._content,
    });

    HelpInitiator.init({
      help: this._help,
      content: this._content,
    });

    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const hash = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[hash];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
