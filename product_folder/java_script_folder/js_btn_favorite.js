const btn = document.querySelector('.favorite-btn');

document.querySelectorAll('.favorite-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active');
  });
});