/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class HelpForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  set clickEvent({eventClose, eventSubmit}) {
    this._clickEventClose = eventClose;
    this._clickEventSubmit = eventSubmit;
    this.render();
  }

  render() {
    console.log('check');
    this.innerHTML=`
            <button class="close-button"><span class="material-icons-round close">&#xe5cd;</span></button>
            <h2>Help Form</h2>
            <div class="input">
                <h4>Full Name</h4>
                <input type="text" placeholder="Full Name" required>
            </div>
            <div class="input">
                <h4>Email</h4>
                <input type="text" placeholder="Email" required>
            </div>
            <div class="input">
                <h4>What Can We Help You With?</h4>
                <input type="text" placeholder="Enter text here" required>
            </div>
            <button class="submit" type="button">Submit Form</button>
        
        `;
    this.querySelector('.close-button').addEventListener('click', this._clickEventClose);
    this.querySelector('.submit').addEventListener('click', this._clickEventSubmit);
  }

  click() {
  }
}

customElements.define('help-form', HelpForm);
