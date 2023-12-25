function sortIntoHouse() {

  const answer1 = document.getElementById('question1').value;
  const answer2 = document.querySelector('input[name="question2"]:checked');


  let house;
  if (answer1 === 'broomstick' && answer2) {
      house = answer2.value;
  } else {
      house = 'unknown';
  }


  const resultContainer = document.getElementById('sorting-result');
  resultContainer.textContent = `შენ ეკუთვნი ${house.charAt(0).toUpperCase() + house.slice(1)} სახლს!`;
}
