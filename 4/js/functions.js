const checkStringLength = function (string, maxLength) {
  return string.length <= maxLength;
};
const isPalindrome = function (string) {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = normalizedString.length - 1; i >= 0; i--) {
    reversedString += normalizedString[i];
  }

  return normalizedString === reversedString;
};


checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 10);

isPalindrome('топот');
isPalindrome('ДовОд');
isPalindrome('Кекс');
