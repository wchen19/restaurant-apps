/* eslint-disable require-jsdoc */
class ReviewBox extends HTMLElement {
  set review(data) {
    this._review = data;
    this.render();
  }

  render() {
    this.innerHTML=`
            <h5>${this._review.name}</h5>
            <p class="date">${this._review.date}</p>
            <p class="review">${this._review.review}</p>
        `;
  }
}

customElements.define('review-box', ReviewBox);
