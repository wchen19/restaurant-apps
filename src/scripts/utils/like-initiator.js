import FavoriteRestoIdb from '../data/favoriteresto_idb.js';
import '../views/components/like-button.js';

const LikeButtonInitiator = {
  async init({likeContainer, resto}) {
    this._likeContainer = likeContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const {id} = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderLike() {
    const likeButton = document.createElement('like-button');
    likeButton.button = 'like';
    this._likeContainer.appendChild(likeButton);

    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    const likeButton = document.createElement('like-button');
    likeButton.button = 'liked';
    this._likeContainer.appendChild(likeButton);

    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
