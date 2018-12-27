/*
* Toggle Sidebar Navigation
*/

const menuToggle = document.getElementById('navigation');

menuToggle.addEventListener('click', function(event) {
  console.log('click');
  document.body.classList.toggle('close');
});