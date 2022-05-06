import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto_idb';
import LikeButtonPresenter from '../../src/scripts/utils/like-presenter';

const createLikeButtonPresenterWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeContainer: document.querySelector('#likeContainer'),
    favoriteResto: FavoriteRestoIdb,
    resto,
  });
};

export {createLikeButtonPresenterWithResto};
