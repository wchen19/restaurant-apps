/* eslint-disable require-jsdoc */
class LikeButton extends HTMLElement {
  set button(state) {
    if (state === 'like') {
      this.renderLike();
    }
    if (state === 'liked') {
      this.renderLiked();
    }
  }

  renderLike() {
    this.innerHTML=`
        <button aria-label="like restaurant" id="likeButton" class="like">
        <i class="far fa-thumbs-up"></i>
        </button>
        `;
  }

  renderLiked() {
    this.innerHTML=`
        <button aria-label="unlike restaurant" id="likeButton" class="like">
        <i class="fas fa-thumbs-up"></i>
        </button>
        `;
  }
}

customElements.define('like-button', LikeButton);
