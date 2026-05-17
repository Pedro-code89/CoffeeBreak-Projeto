document.querySelectorAll('.favorite-btn').forEach(btn => {

  btn.addEventListener('click', () => {

    btn.classList.toggle('active');

    const toast = document.createElement('div');

    if(btn.classList.contains('active')) {
      toast.textContent = '☕ adicionado aos favoritos';
    } else {
      toast.textContent = '❌ removido dos favoritos';
    }

    toast.classList.add('toast');

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.remove();
    }, 2000);

  });

});