var num_alphabets = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var random_number = Math.floor(Math.random() * (num_alphabets.length))
var chosen_char = num_alphabets[random_number]
document.getElementById('letter_display').innerHTML = chosen_char;

// Detecting keyboard press and changing the letters
var j = 0;
var speed = 0;
var test_duration = 30000;
var speed_multiplicator = 2;

// function test_duration_set(time_s) {
//   test_duration = time_s * 1000;
// }

// speed_multiplicator = 60000 / test_duration;

function new_letter(event) {
  if (event.key == chosen_char) {
    num_alphabets = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    random_number = Math.floor(Math.random() * (num_alphabets.length))
    chosen_char = num_alphabets[random_number]
    document.getElementById('letter_display').innerHTML = chosen_char;
    j++
  }
}

document.addEventListener("keydown", new_letter)
const myTimeout = setTimeout(function () {
  speed = j * speed_multiplicator;
  document.removeEventListener("keydown", new_letter)
  alert("Your typing speed is " + speed + " characters per minute");
  document.getElementById('letter_display').innerHTML = "Game Over!"
}, test_duration)

function reload_website() {
  location.reload()
}
