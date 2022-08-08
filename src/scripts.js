// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import { getAllData } from './apiCalls';
const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
dayjs().format()

// import Rooms from './classes/Rooms-class.js';
// import Customer from './classes/Customers-class.js';
// import Booking from './classes/Bookings-class.js';
// import Hotel from './classes/Hotel-class.js';


console.log('Welcome to hotel-eden');



// ~~~~~~~~~~~~~~~~~~~~~Query Selectors~~~~~~~~~~~~~~~~~~~~~~~~~~~

const navText = document.querySelector(".menu-wrapper");
const redirectContainer = document.querySelector(".redirect-container");
const mainContainer = document.querySelector(".main-container")
const redirectText = document.querySelector(".redirect-grid5")







// ~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', getAllData);
navText.addEventListener('click', redirect);
redirectText.addEventListener('click', backToHome);




// ~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~


let customerData;
let roomsData;
let bookingData;
let customer;
let allRooms;
let booking;









// ~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~

getAllData().then(responses => {
    customerData = responses[0];
    roomsData = responses[1];
    bookingData = responses[2];
    // customer = new Customer(customerData[getRandomIndex(customerData)]);
    // allRooms = roomsData.map(room => new Room(room, bookingData));
    // booking =  new Booking (allRooms);
    
  });



  function redirect(){
   hide(mainContainer);
   show(redirectContainer);
  };

  function backToHome(){
   hide(redirectContainer);
   show(mainContainer);
  };



























// ~~~~~~~~~~~~~~~~~~~~~~~~~~Possible redirect~~~~~~~~~~~~~~~~~~~~~~
// const handleRedirect = () => {
//   const navText = document.querySelector("nav-text");
  
// navText.addEventListener("click", function() {
//   throw Error("Can't touch this button!");
// });
//   try {
//     Block of code to try
//   }
//   catch(err) {
//     Block of code to handle errors
//   }
// }


// app.use(function(req, res, next){
//   res.status(404);

//   // respond with html page
//   if (req.accepts('html')) {
//     res.render('404', { url: req.url });
//     return;
//   }

//   // respond with json
//   if (req.accepts('json')) {
//     res.send({ error: 'Not found' });
//     return;
//   }

//   // default to plain-text. send()
//   res.type('txt').send('Not found');
// });

































































// ~~~~~~~~~~~~~~~~~~~~~~~~~other~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
function hide(element) {
    element.classList.add('hidden');
  }
  
  function show(element) {
    element.classList.remove('hidden');
  }

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

p.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})