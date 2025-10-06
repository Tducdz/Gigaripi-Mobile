const intervalQuestion = setInterval(() => {
  const questions = document.querySelectorAll(".question");
  if (questions) {
    clearInterval(intervalQuestion);
    questions.forEach((q) => {
      q.addEventListener("click", () => {
        document.querySelectorAll(".answer").forEach((a) => {
          if (a.classList.contains("active")) {
            a.classList.remove("active");
          }
        });

        const answer = q.querySelector(".answer");
        answer.classList.add("active");
      });
    });
  }
}, 100);
