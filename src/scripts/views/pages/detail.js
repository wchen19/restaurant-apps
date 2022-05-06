import RestaurantDB from '../../data/restaurant_db.js';
import UrlParser from '../../routes/url-parser.js';
import LikeButtonPresenter from '../../utils/like-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto_idb.js';
import '../components/detail-page.js';

const Detail = {
  async render() {
    const hero = document.getElementById('hero');
    hero.style.display='none';
    return `        
        <div id="detail" class="detail">
        <div id="likeContainer"></div>
        </div>
        `;
  },

  async afterRender() {
    const hash = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantDB.restaurantDetail(hash.id);
    const content = document.querySelector('#detail');
    const detailPage=document.createElement('detail-page');
    detailPage.detail=restaurant;
    content.appendChild(detailPage);

    const postReview = () =>{
      const {name, review} = detailPage.value;
      const reviewData = {
        'id': hash.id,
        'name': name,
        'review': review,
      };
      RestaurantDB.postReview(reviewData);
    };
    detailPage.clickEvent = postReview;

    LikeButtonPresenter.init({
      likeContainer: document.querySelector('#likeContainer'),
      favoriteResto: FavoriteRestoIdb,
      resto: {
        id: restaurant.restaurant.id,
        pictureId: restaurant.restaurant.pictureId,
        name: restaurant.restaurant.name,
        rating: restaurant.restaurant.rating,
        city: restaurant.restaurant.city,
        description: restaurant.restaurant.description,
      },
    });
  },
};

export default Detail;
