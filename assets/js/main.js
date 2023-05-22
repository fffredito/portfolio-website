// get references to the elements you want to resize
const element1 = document.getElementById('element1');
const element2 = document.getElementById('element2');

// define a function to resize the elements based on the window size
function resizeElements() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const element1Width = windowWidth * 0.5; // set element1 width to half of the window width
  const element1Height = windowHeight * 0.8; // set element1 height to 80% of the window height
  const element2Width = windowWidth * 0.3; // set element2 width to 30% of the window width
  const element2Height = windowHeight * 0.5; // set element2 height to half of the window height
  element1.style.width = `${element1Width}px`;
  element1.style.height = `${element1Height}px`;
  element2.style.width = `${element2Width}px`;
  element2.style.height = `${element2Height}px`;
}

// call the resizeElements function on page load and window resize events
window.addEventListener('load', resizeElements);
window.addEventListener('resize', resizeElements);
