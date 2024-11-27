import '../styles/modal.scss';
function createModal(type, title, message) {

  const modalOverlay = document.createElement('div');
  modalOverlay.classList.add('modal-overlay');


  const modal = document.createElement('div');
  modal.classList.add('modal', `modal-${type}`);


  const modalTitle = document.createElement('h2');
  modalTitle.classList.add('medium__title')
  modalTitle.textContent = title;


  const modalMessage = document.createElement('p');
  modalMessage.classList.add('medium__description')
  modalMessage.textContent = message;


  const closeButton = document.createElement('button');
  closeButton.classList.add('primary__button')
  closeButton.textContent = 'Close';


  modal.appendChild(modalTitle);
  modal.appendChild(modalMessage);
  modal.appendChild(closeButton);


  modalOverlay.appendChild(modal);


  document.body.appendChild(modalOverlay);
  modalOverlay.style.display = 'flex';

  closeButton.addEventListener('click', () => {
    modalOverlay.remove();
  });

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.remove();
    }
  });
}

document.getElementById('show-warning').addEventListener('click', () => {
  createModal('warning', 'Warning', 'This is a warning message.');
});

document.getElementById('show-error').addEventListener('click', () => {
  createModal('error', 'Error', 'An error has occurred.');
});

document.getElementById('show-success').addEventListener('click', () => {
  createModal('success', 'Success', 'Your action was successful!');
});

document.getElementById('show-info').addEventListener('click', () => {
  createModal('info', 'Information', 'This is some info for you.');
});
