const questions = [
  "今、わたしの細胞は震えてる？",
  "その行動、誰のため？",
  "わたしは今、誰かに“わたし”を証明しようとしてる？",
  "今この瞬間、“わたしはこの身体に宿り、ここにある”って感じられてる？",
  "その選択に、わたしはある？",
  "誰かに『すごいね』と言われたくて、やっていない？",
  "今の呼吸は、身体のどこまで届いてる？",
  "今、身体のどこかに力は入ってない？",
  "あなたの細胞はくつろいでる？",
  "あなたがそれを『やりたい』『ほしい』と思ったのは、どんな感情を味わいたいから？",
  "その望みは、不足感から出てない？",
  "それは何にもならなくて、やりたいこと？",
  "今のわたしは、“カタチにするため”に動いてる？それとも“心震えるため”に動いてる？",
  "あなたがこの世界に生まれた意図は？",
  "あなたが世界に放ってるエネルギーって、どんなもの？",
  "あなたが存在することで、世界にどんな影響を与えている？",
  "あなたが存在するだけで、伝わる意図は何？",
  "今この瞬間、わたしは過去にいた？未来にいた？それとも、今にいた？",
  "何を味わいたくて、この地球に生まれたの？",
  "今の呼吸は足の小指まで届いた？",
  "その頭の声は、誰の声だった？",
  "今、それを達成しようとしてる？それとも、楽しもうとしてる？",
  "わたしの命が、この地球に響かせたい音って、どんな音？"
];

const openCard = document.getElementById("openCard");
const intro = document.getElementById("intro");
const cardContainer = document.getElementById("cardContainer");
const card = document.getElementById("card");
const cardInner = document.getElementById("cardInner");
const questionText = document.getElementById("questionText");
const backButton = document.getElementById("backButton");

openCard.addEventListener("click", () => {
  intro.style.display = "none";
  cardContainer.style.display = "flex";

  const randomIndex = Math.floor(Math.random() * questions.length);
  questionText.textContent = questions[randomIndex];

  setTimeout(() => {
    card.classList.add("flip");
  }, 800);
});

backButton.addEventListener("click", () => {
  card.classList.remove("flip");
  cardContainer.style.display = "none";
  intro.style.display = "block";
});
