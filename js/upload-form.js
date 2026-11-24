const form = document.querySelector('.img-upload__form');
const fileInput = form.querySelector('.img-upload__input');
const overlay = form.querySelector('.img-upload__overlay');
const cancelButton = form.querySelector('.img-upload__cancel');
const hashtags = form.querySelector('.text__hashtags');
const comment = form.querySelector('.text__description');

const pristine = new window.Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-error',
}, false);

const hashtagPattern = /^#[\p{L}\p{N}]{1,19}$/u;
const getHashtags = (value) => value.trim().split(/\s+/).filter(Boolean);

pristine.addValidator(
  hashtags,
  (value) => getHashtags(value).every((tag) => hashtagPattern.test(tag)),
  'Некорректный хэш-тег',
  3,
  true
);

pristine.addValidator(
  hashtags,
  (value) => getHashtags(value).length <= 5,
  'Можно указать не больше 5 хэш-тегов',
  2,
  true
);

pristine.addValidator(
  hashtags,
  (value) => {
    const tags = getHashtags(value).map((tag) => tag.toLowerCase());
    return new Set(tags).size === tags.length;
  },
  'Хэш-теги не должны повторяться',
  1,
  true
);

pristine.addValidator(
  comment,
  (value) => value.length <= 140,
  'Комментарий не должен быть длиннее 140 символов'
);

function closeUploadForm() {
  overlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onUploadEscKeydown);
  form.reset();
  pristine.reset();
}

function onUploadEscKeydown(evt) {
  if (evt.key === 'Escape' && evt.target !== hashtags && evt.target !== comment) {
    closeUploadForm();
  }
}

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    overlay.classList.remove('hidden');
    document.body.classList.add('modal-open');
    document.addEventListener('keydown', onUploadEscKeydown);
  }
});

cancelButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeUploadForm();
});

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
