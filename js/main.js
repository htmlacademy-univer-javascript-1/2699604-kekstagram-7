const getRandomInteger = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const NAMES = [
  'Артём',
  'Анна',
  'Иван',
  'Мария',
  'Алексей',
  'Екатерина',
  'Максим',
  'София'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const DESCRIPTIONS = [
  'Красивый день!',
  'Отличное настроение!',
  'Незабываемый момент.',
  'Прекрасное место.',
  'Хороший день для фотографии.'
];

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

let commentId = 1;

const createMessage = () => {
  const firstMessage = getRandomArrayElement(MESSAGES);

  if (getRandomInteger(1, 2) === 1) {
    return firstMessage;
  }

  return `${firstMessage} ${getRandomArrayElement(MESSAGES)}`;
};

const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES)
});

const createComments = () => {
  const comments = [];
  const commentsCount = getRandomInteger(0, 30);

  for (let i = 0; i < commentsCount; i++) {
    comments.push(createComment());
  }

  return comments;
};

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const createPhotos = () =>
  Array.from(
    { length: 25 },
    (_, index) => createPhoto(index + 1)
  );

createPhotos();
