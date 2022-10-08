let upper = 2;
let name = prompt('Enter name:')

while(true) {
  let guess = prompt(`${name} Enter a number between 1 - ${upper}: (stage ${upper-1}) `);
  let random = Math.ceil(Math.random() * upper)
  if(guess == random) {
    upper++
    console.log(`Correct Levelling Up! ${name}`)
  } else {
    console.log(`Wrong Guess, Sorry ${name} Game Over. you guessed`, guess,'. The correct answer is', random)
    break
  }
}