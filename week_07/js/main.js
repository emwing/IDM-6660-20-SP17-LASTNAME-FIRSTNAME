var navButton = document.querySelector('.iconnav');
navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('navopen');
});
