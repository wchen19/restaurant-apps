const SkipInitiator = {
  init({skip, content}) {
    skip.addEventListener('click', () => {
      content.focus();
    });
  },
};

export default SkipInitiator;
