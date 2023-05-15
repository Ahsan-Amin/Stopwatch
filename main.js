// const playButton = document.querySelector('.start');
// const pauseButton = document.querySelector('.pause');
// const resetButton = document.querySelector('.reset');

// playButton.addEventListener('click', start);
// pauseButton.addEventListener('click', pause);
// resetButton.addEventListener('click', reset);


// // Declare the variable to use in our function below
// let startTime;
// let elapsedTime;
// let timeInterval;


// // Convert time into HOURS:MINUTES:MILLISECONDS
// function timeToString(time) {
//     let diffInHrs= time/3600000;
//     let hh=Math.floor(diffInHrs)

//     let diffInMin = (diffInHrs - hh) * 60;
//     let mm = Math.floor(diffInMin);
    
//     let diffInSec = (diffInMin - mm) * 60;
//     let ss = Math.floor(diffInSec);

//     let diffInMs=(diffInSec-sec) * 1000;
//     let ms=Math.floor(diffInMs)

//     let formatMM=mm.toString().padStart(2,'0')
//     let formatSS=ss.toString().padStart(2,'0')
//     let formatMS=ms.toString().padStart(2,'0')


//     return`${formatMM}:${formatSS}:${formatMS}`;
// }

// // Create function to modify inner HTML

// function print(txt) {
//     document.getElementById('display').innerHTML = txt;
//   }

// // Start button function

//     function start() {
//         startTime = Date.now() - elapsedTime;
//         timeInterval = setInterval(function printTime() {
//           elapsedTime = Date.now() - startTime;
//           print(timeToString(elapsedTime));
//         }, 10);
//       }
//     function pause() {
//         clearInterval(timeInterval);
//       }
      
//       function reset() {
//         clearInterval(timeInterval);
//         print('00:00:00');
//         elapsedTime = 0;
//       }
      

// HTML elements
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const display = document.querySelector('.display');

// Variables
let startTime;
let elapsedTime = 0;
let timerInterval;

// Format time in HH:MM:SS format
function formatTime(time) {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time / 60000) % 60);
  const seconds = Math.floor((time / 1000) % 60);
  return `${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Update the display with the elapsed time
function updateDisplay() {
  display.textContent = formatTime(elapsedTime);
}

// Start the stopwatch
function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

// Stop the stopwatch
function stop() {
  clearInterval(timerInterval);
}

// Reset the stopwatch
function reset() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
}

// Event listeners
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
