const screens = {
  home: document.querySelector('#homeScreen'),
  friends: document.querySelector('#friendsScreen'),
  couple: document.querySelector('#coupleScreen'),
};

const friendsAnswer = document.querySelector('#friendsAnswer');
const coupleAnswer = document.querySelector('#coupleAnswer');

// 여기에 원하는 게임/질문을 자유롭게 추가하세요.
const friendGames = [
  '손병호 게임',
  '훈민정음 게임',
  '초성 퀴즈',
  '몸으로 말해요',
  '금지어 게임',
  '눈치 게임',
  '이어 말하기',
  '밸런스 게임',
];

const coupleQuestions = [
  '매일 5시간 통화하는 연인<br><span>VS</span><br>한 달에 5분 통화하는 연인',
  '기념일을 모두 챙기는 연인<br><span>VS</span><br>평소에 더 잘해주는 연인',
  '표현은 많지만 연락이 느린 연인<br><span>VS</span><br>표현은 적지만 연락이 빠른 연인',
  '나와 취향이 똑같은 연인<br><span>VS</span><br>나와 성격이 잘 맞는 연인',
  '매일 만나는 연인<br><span>VS</span><br>주말에만 길게 만나는 연인',
  '솔직해서 직설적인 연인<br><span>VS</span><br>배려해서 돌려 말하는 연인',
];

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove('is-active'));
  screens[name].classList.add('is-active');
  history.replaceState({ screen: name }, '', name === 'home' ? './' : `#${name}`);
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function randomDifferent(items, currentHtml) {
  if (items.length < 2) return items[0];
  let next;
  do {
    next = items[Math.floor(Math.random() * items.length)];
  } while (next === currentHtml);
  return next;
}

function animateAnswer(element) {
  element.classList.remove('pop');
  void element.offsetWidth;
  element.classList.add('pop');
}

document.querySelector('.home-couple').addEventListener('click', () => showScreen('couple'));
document.querySelector('.home-friends').addEventListener('click', () => showScreen('friends'));
document.querySelector('.friends-back').addEventListener('click', () => showScreen('home'));
document.querySelector('.couple-back').addEventListener('click', () => showScreen('home'));

document.querySelector('.friends-random').addEventListener('click', () => {
  friendsAnswer.innerHTML = randomDifferent(friendGames, friendsAnswer.innerHTML);
  animateAnswer(friendsAnswer);
});

document.querySelector('.couple-random').addEventListener('click', () => {
  coupleAnswer.innerHTML = randomDifferent(coupleQuestions, coupleAnswer.innerHTML);
  animateAnswer(coupleAnswer);
});

const initial = location.hash.replace('#', '');
showScreen(initial === 'friends' || initial === 'couple' ? initial : 'home');
