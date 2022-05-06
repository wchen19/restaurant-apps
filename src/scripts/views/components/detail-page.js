/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import CONFIG from '../../globals/config.js';
import './review-box.js';

class DetailPage extends HTMLElement {
  set detail(data) {
    this._detail=data.restaurant;
    this.render();
    this.renderFoods();
    this.renderDrinks();
    this.renderReview();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.click();
  }

  get value() {
    const review = {
      'name': this.querySelector('.name-input').value,
      'review': this.querySelector('.review-input').value,
    };
    return review;
  }

  render() {
    this.innerHTML=`
                <img class="lazyload" src="${CONFIG.IMAGE_URL_L+this._detail.pictureId}" alt="${this._detail.name}">
                <h2>Restaurant Detail</h2>
                <h3 class="name">${this._detail.name}</h3>
                <h4>Address</h4>
                <p class="address">${this._detail.address}</p>
                <h4>City</h4>
                <p class="city">${this._detail.city}</p>
                <h4>Description</h4>
                <p class="desc">${this._detail.description}</p>
                <h4>Food Menu</h4>
                <div class="food-menu-list">
                  <ul class="food-menu"></ul>
                </div>
                <h4>Drink Menu</h4>
                <div class="drink-menu-list">
                <ul class="drink-menu"></ul>
                </div>
                <h4>Customer Review</h4>
                <form class="review-form">
                <input type="text" class="name-input" placeholder="Full Name" required>                
                <input type="text" class="review-input" placeholder="Write your review here" required>
                <button class="review-button">Submit</button>    
                </form>
                <div class="customer-review">
                
                </div>
        `;
  }

  renderFoods() {
    const foods = this._detail.menus.foods.map((food) => food.name);
    const foodMenu = this.querySelector('.food-menu');
    foods.forEach((food) => {
      const text = document.createElement('li');
      text.innerText = food;
      foodMenu.append(text);
    });
  }

  renderDrinks() {
    const drinks = this._detail.menus.drinks.map((drink) => drink.name);
    const drinkMenu = this.querySelector('.drink-menu');
    drinks.forEach((drink) => {
      const text = document.createElement('li');
      text.innerText = drink;
      drinkMenu.appendChild(text);
    });
  }

  renderReview() {
    const reviews = this._detail.customerReviews;
    const custReviews = this.querySelector('.customer-review');
    reviews.forEach((review) =>{
      const reviewBox = document.createElement('review-box');
      reviewBox.review = review;
      custReviews.appendChild(reviewBox);
    });
  }

  click() {
    this.querySelector('.review-button').addEventListener('click', this._clickEvent);
  }
}

customElements.define('detail-page', DetailPage);
