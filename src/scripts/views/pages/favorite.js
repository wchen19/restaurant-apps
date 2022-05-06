import FavoriteRestoIdb from '../../data/favoriteresto_idb.js';
import '../components/resto-card.js';

const Favorite = {
  async render() {
    const hero = document.getElementById('hero');
    hero.style.display='flex';
    return `        
        <h2>Favorite Restaurant</h2>
        <div id="content" class="content">
        
        </div>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestoIdb.getAllResto();
    const content = document.querySelector('#content');

    if (restaurants.length === 0) {
      const favoriteResto=document.createElement('resto-card');
      const title = document.querySelector('#mainContent');
      favoriteResto.resto = restaurants;
      title.appendChild(favoriteResto);
    }

    restaurants.forEach((restaurant) => {
      const favoriteResto=document.createElement('resto-card');
      favoriteResto.resto = restaurant;
      content.appendChild(favoriteResto);
    });
  },
};

export default Favorite;
