import '../views/components/like-button.js';

const LikeButtonPresenter = {
  async init({likeContainer, favoriteResto, resto}) {
    this._likeContainer = likeContainer;
    this._favoriteResto = favoriteResto;
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
    const resto = await this._favoriteResto.getResto(id);
    return !!resto;
  },

  _renderLike() {
    const likeButton = document.createElement('like-button');
    likeButton.button = 'like';
    this._likeContainer.appendChild(likeButton);

    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderLiked() {
    const likeButton = document.createElement('like-button');
    likeButton.button = 'liked';
    this._likeContainer.appendChild(likeButton);

    likeButton.addEventListener('click', async () => {
      await this._favoriteResto.deleteResto(this._resto.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
