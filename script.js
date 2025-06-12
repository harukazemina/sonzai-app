const questions = [
  "今の呼吸の質に満足している？",
  "今の感情の源ってなんだろう？",
  "わたしが心から望むことを叶えるとき、歓びうるとしてフリー？",
  "わたしの命が、この地球に響かせたい音って、どんな音？",
  "わたしの存在が一番自然にひらいて、やっていない？",
  "その選択に、わたしはある？"
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
