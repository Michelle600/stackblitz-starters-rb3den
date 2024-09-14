function startQuiz() {
  const guess = prompt('What does this ✅ stands for? ');

  if (guess.toLocaleLowerCase() === 'tick') {
    alert(' Your guessed correctly!');
  } else {
    alert('Sorry, the correct answer was Tick.');
  }
  const guess2 = prompt('What does this 🍉 stands for? ');

  if (guess2.toLocaleLowerCase() === 'watermelon') {
    alert(' Your guessed correctly!');
  } else {
    alert('Sorry, the correct answer was Watermelon.');
  }
}
