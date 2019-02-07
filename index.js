window.onload = function() {
  const aboutButton = document.querySelector('.about-button');
  const aboutSection = document.querySelector('.about-us');
  aboutButton.addEventListener('click', e => {
    console.log('Yes I am clicking');
    aboutSection.scrollIntoView({ 
      behavior: 'auto' 
    });
  });
};
