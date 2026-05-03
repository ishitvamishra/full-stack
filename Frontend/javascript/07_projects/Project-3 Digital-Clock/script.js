const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock'); // this will also work

// let date = new Date();
//prints the time in the format of the user's locale
// console.log(date.toLocaleTimeString());

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)