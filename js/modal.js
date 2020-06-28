// скрипт для открытия модального окна
(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
})();

// скрипт для скролла модалки

  document.querySelector('.hero__button').onclick = () => {
    document.querySelector('.backdrop').classList.remove('is-hidden');
    document.querySelector('body').style.overflow = 'hidden';
  };
  document.querySelector('.close-button').onclick = () => {
    document.querySelector('.backdrop').classList.add('is-hidden');
    document.querySelector('body').style.overflow = 'auto';
  };

//скрипт для блокировки книпки отправить

  const policy = document.getElementById('checkbox');
  policy.onchange = () => {
    if (policy.checked) {
      document.getElementById('send').removeAttribute('disabled');
    } else {
      document.getElementById('send').setAttribute('disabled', 'true');
    }
  };
