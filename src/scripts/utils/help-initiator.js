import '../views/components/help-form.js';

const HelpInitiator = {
  init({help, content}) {
    help.addEventListener('click', (event)=>{
      this._createHelp(event, content);
    });
  },

  _createHelp(event, content) {
    event.stopPropagation();
    const helpForm = document.createElement('help-form');
    console.log(helpForm);
    content.appendChild(helpForm);
    const removeHelp = () => {
      helpForm.remove();
    };
    const submitHelp = () => {
      helpForm.remove();
      alert('Form Submitted');
    };
    helpForm.clickEvent = {
      eventClose: removeHelp,
      eventSubmit: submitHelp,
    };
  },

};

export default HelpInitiator;
