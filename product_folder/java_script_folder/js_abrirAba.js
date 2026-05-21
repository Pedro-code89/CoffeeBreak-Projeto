const modal = document.getElementById('simpleModal');
const overlay = document.getElementById('simpleOverlay');
const openButtons = document.querySelectorAll('.product-button');
const closeButton = document.querySelector('.simple-close');

function openModal() {
  modal.classList.add('active');
  overlay.classList.add('active');

  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');

  document.body.style.overflow = 'auto';
}

openButtons.forEach(button => {
  button.addEventListener('click', openModal);
});

closeButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);