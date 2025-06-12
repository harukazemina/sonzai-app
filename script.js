const questions = [
  "わたしは今、誰かに“わたし”を証明しようとしていない？",
  "その望みは、不足感から出ていない？",
  "あなたが存在することで、世界にどんな影響を与えている？",
  "今の呼吸は足の小指まで届いた？",
  "今、身体のどこかに力は入ってない？",
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
