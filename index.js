const Day = document.getElementById('day');
const TimeUTC = document.getElementById('time');

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const date = new Date();
let DeDate = date.getDay();
let dayName = daysOfWeek[DeDate];
console.log(DeDate);

Day.innerHTML = dayName;

const Time = Date.now();
const formattedTime = Time.toLocaleString();
console.log(formattedTime)
TimeUTC.innerHTML = formattedTime;