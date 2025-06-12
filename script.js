const questions = [
  "今の呼吸は足の小指まで届いた？",
  "その選択に、わたしはある？",
  "あなたが世界に放ってるエネルギーって、どんなもの？",
  "誰かに『すごいね』と言われたくて、やっていない？",
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
