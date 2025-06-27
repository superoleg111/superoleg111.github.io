const $dialog = document.querySelector('#dialog');
const $form = document.querySelector('#form');
const $closeDialogBtn = document.querySelector('#close-dialog-btn');
const openDialogBtns = document.querySelectorAll('[data-id="open-dialog"]');

console.log($form.elements);

$closeDialogBtn.addEventListener('click', () => {
  $dialog.close();
});

$dialog.addEventListener('click', event => {
  if (event.target === $dialog) {
    $dialog.close();
  }
});

openDialogBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    $form.reset();
    $form.classList.remove('was-validated');
    $dialog.showModal();
  })
});

$form.addEventListener('submit', (e) => {
  if (!$form.checkValidity()) {
    e.preventDefault()
    e.stopPropagation()
  }

  $form.classList.add('was-validated')
}, false);