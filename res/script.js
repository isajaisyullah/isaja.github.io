const colors = ["#f15025", "rgba(110, 255, 250)", "rgba(230, 242, 242)", "#ff0040", "yellow", "#2bff00", "purple"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btnq = question.querySelector(".question-btn");
  // console.log(btnq);

  btnq.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});
