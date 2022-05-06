/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import CONFIG from '../../globals/config.js';

class FavoriteResto extends HTMLElement {
  set resto(data) {
    this._resto=data;
    this.render();
  }
  render() {
    this.innerHTML=`
        <div class="card">
                <img src="${CONFIG.IMAGE_URL_S+this._resto.pictureId}" alt="${this._resto.name}">
                <h3 class="name"><a href="${`/#/detail/${this._resto.id}`}">${this._resto.name}</a></h3>
                <p class="city">${this._resto.city}</p>
                <p class="rate">Rating: ${this._resto.rating} &#9733;</p>
                <p class="desc">${this._resto.description}</p>
            </div>
        `;
  }
}

customElements.define('favorite-resto', FavoriteResto);
