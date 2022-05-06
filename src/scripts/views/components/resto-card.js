/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import CONFIG from '../../globals/config.js';

class RestoCard extends HTMLElement {
  set resto(data) {
    const bool = data.length === 0;
    if (bool) {
      this.renderNone();
    } else {
      this._resto=data;
      this.render();
    }
  }
  renderNone() {
    this.innerHTML = `
    <div class="resto-item__not__found">Tidak ada restoran untuk ditampilkan</div>
    `;
  }

  render() {
    this.innerHTML=`
        <div class="card">
                <img class="lazyload" data-src="${CONFIG.IMAGE_URL_S+this._resto.pictureId}" alt="${this._resto.name}">
                <h3 class="name"><a href="${`/#/detail/${this._resto.id}`}">${this._resto.name}</a></h3>
                <p class="city">${this._resto.city}</p>
                <p class="rate">Rating: ${this._resto.rating}&#9733;</p>
                <p class="desc">${this._resto.description}</p>
            </div>
        `;
  }
}

customElements.define('resto-card', RestoCard);
