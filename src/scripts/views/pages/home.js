import RestaurantDB from '../../data/restaurant_db.js';
import '../components/resto-card.js';

const Home = {
  async render() {
    const hero = document.getElementById('hero');
    hero.style.display='flex';
    return `        
        <h2>Explore Restaurant</h2>
        <div id="content" class="content">
        
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantDB.restaurantList();
    restaurants.forEach((restaurant) => {
      const content = document.querySelector('#content');
      const restoCard=document.createElement('resto-card');
      restoCard.resto=restaurant;
      content.appendChild(restoCard);
    });
  },
};

export default Home;
