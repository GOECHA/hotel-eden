// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/styles.css';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)

import { getAllData } from './apiCalls';
import { Datepicker } from 'vanillajs-datepicker';
// const dayjs = require('dayjs')
//import dayjs from 'dayjs' // ES 2015
// dayjs().format()

import Room from './classes/Rooms-class';
import Customer from './classes/Customers-class';
import Booking from './classes/Bookings-class';
import Hotel from './classes/Hotel-class';


console.log('Welcome to hotel-eden');



// ~~~~~~~~~~~~~~~~~~~~~Query Selectors~~~~~~~~~~~~~~~~~~~~~~~~~~~

const navText = document.querySelector(".menu-wrapper");
const redirectContainer = document.querySelector(".redirect-container");
const mainContainer = document.querySelector(".main-container");
const redirectText = document.querySelector(".redirect-grid5");
const loginPage = document.querySelector(".login-page");
const loginBtn = document.querySelector(".login-text");
const backHome = document.querySelector(".home-text");
const bookARoomNav = document.querySelector(".book-room-text");
const bookARoomFooter = document.querySelector(".book-room-text-footer");
const footer = document.querySelector(".footer-container");
const bookARoomPage = document.querySelector(".book-a-room-main-container");
const toHomeFromBook = document.querySelector(".home-text-book-room");
const toLoginFromBook = document.querySelector(".login-text-book-room");
const searchCalendar = document.querySelector(".search-calendar");
const signInBtn = document.querySelector(".loginBtn");
const calendar = document.querySelector('input[name="calendar-text"]');

// ~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', getData);
// navText.addEventListener('click', redirect);
loginBtn.addEventListener(`click`, goToLoginPage);
toLoginFromBook.addEventListener(`click`, goToLoginPage);
redirectText.addEventListener('click', backToHome);
toHomeFromBook.addEventListener('click', backToHome);
backHome.addEventListener('click', backToHomeFromLogin)
bookARoomNav.addEventListener('click', bookARoom)
bookARoomFooter.addEventListener('click', bookARoom)
signInBtn.addEventListener('click', signIn)

// ~~~~~~~~~~~~~~~~~~~~~Global Variables~~~~~~~~~~~~~~~~~~~~~~~~~~~


let customerData;
let roomsData;
let bookingData;
let customer;
let allRooms;
let booking;
let hotel;
let currentDate;
let allRoomsData;








// ~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~
  function getData() {
    getAllData.then((data) => {
      console.log(`data`, data)
    customerData = data[0].customers.map(customer => new Customer(customer));
    console.log(`HELLO`, customerData)
    allRoomsData = data[1].rooms.map(room => new Room(room));
    bookingData = data[2].bookings.map(booking => new Booking(booking));
    //add and delete booking here
    loadData();
  });
  }
  // customer = new Customer(customerData[getRandomIndex(customerData)]);

  function loadData(){
    hotel = new Hotel(currentDate, bookingData, roomsData, customerData)
  }

  // function redirect(){
  //  hide(mainContainer);
  //  show(redirectContainer);
  // };

  function backToHome(){
   hide(bookARoomPage);
   hide(redirectContainer);
   show(mainContainer);
   show(footer);
  };

  function goToLoginPage(){
    hide(mainContainer);
    hide(bookARoomPage);
    show(loginPage);
    show(footer);
  };
 
  function backToHomeFromLogin(){
    hide(loginPage);
    hide(bookARoomPage);
    show(mainContainer);
  };

function bookARoom(){
  hide(mainContainer);
  hide(loginPage);
  show(bookARoomPage);
  hide(footer);
};

function signIn(){
  hide(loginPage);
  hide(bookARoomPage);
  show(mainContainer);
}























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

let promise = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a == 2) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})

promise.then((message) => {
    console.log('This is in the then ' + message)
}).catch((message) => {
    console.log('This is in the catch ' + message)
})