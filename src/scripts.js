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
const searchCalendar = document.querySelector(".search-calendar-btn");
const signInBtn = document.querySelector(".loginBtn");
const calendar = document.querySelector('input[name="calendar-text"]');
const customerWelcomeMessage = document.querySelector('input[name="calendar-text"]');
const welcomeMessage = document.querySelector(".welcome-message")
const pastTrips = document.querySelector(".list-past-trips")
const futureTrips = document.querySelector(".list-upcoming-trips")
const totalPoints = document.querySelector(".points-earned")
const futureBalanceTotal = document.querySelector(".future-balance")


// ~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', getData);
// navText.addEventListener('click', redirect);
loginBtn.addEventListener(`click`, goToLoginPage);
toLoginFromBook.addEventListener(`click`, goToLoginPage);
redirectText.addEventListener('click', backToHome);
toHomeFromBook.addEventListener('click', backToHome);
backHome.addEventListener('click', backToHomeFromLogin)
bookARoomNav.addEventListener('click', goToBookARoom)
bookARoomFooter.addEventListener('click', goToBookARoom)
signInBtn.addEventListener('click', signIn)
searchCalendar.addEventListener("click", searchForRoom)

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
    customerData = data[0].customers.map(customer => new Customer(customer));
    customer = new Customer(customerData[Math.floor(Math.random() * 41)]);
    allRoomsData = data[1].rooms.map(room => new Room(room));
    bookingData = data[2].bookings.map(booking => new Booking(booking));
    //add and delete booking here
    loadData();
  });
  }
 

  function loadData(){
    console.log(`roomData`, allRoomsData)
    hotel = new Hotel(currentDate, allRoomsData, bookingData,  customerData);
    updateCustomerWelcome();
    showPastBookings();
    showUpcomingBookings();
    displayPoints();
    displayFutureBalance();
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

  function goToBookARoom(){
    hide(mainContainer);
    hide(loginPage);
    show(bookARoomPage);
    hide(footer);
  };

  function signIn(){
    hide(loginPage);
    hide(bookARoomPage);
    show(mainContainer);
  };


  function updateCustomerWelcome() {
    welcomeMessage.innerHTML = '';
    let customerName = document.createElement('h5')

    customerName.innerHTML = `Welcome, <b> ${customer.name}!`;
    welcomeMessage.appendChild(customerName)  
  }


function showPastBookings(){
  customer.getCustomerBookings(hotel.bookings, hotel.rooms)
  customer.allBookingsTotal()
  pastTrips.innerHTML = '';
  customer.pastBookings.forEach(booking => {
      let pastTrip = document.createElement('h4')
      pastTrip.innerText = booking.date
      pastTrips.appendChild(pastTrip)
  });
};


function showUpcomingBookings(){
  customer.getCustomerBookings(hotel.bookings, hotel.rooms)
  customer.allBookingsTotal()
  futureTrips.innerHTML = '';
  customer.upcomingBookings.forEach(booking => {
       let upcomingTrip = document.createElement('h4')
       upcomingTrip.innerText = booking.date
       futureTrips.appendChild(upcomingTrip)
      });
};

function displayPoints (){
  customer.calculatePointsEarned()
  totalPoints.innerHTML = '';
  let allPoints = document.createElement('h4')
  allPoints.innerText = customer.pointsEarned.toFixed(0)
  totalPoints.appendChild(allPoints)
};

function displayFutureBalance(){
  customer.calculateFutureBalance()
  futureBalanceTotal.innerHTML = '';
  let futureBalance = document.createElement('h4')
  futureBalance.innerText = `$${customer.futureBalance.toFixed(0)}`
  futureBalanceTotal.appendChild(futureBalance)
};

  function searchForRoom(){

  };

  function filterRoomsByType(){

  };


  function showAvailableRooms(){

  };

  function displayAvailableRoomData(){

  };


  function bookARoom(){

  };

  function loginByUserName(){

  };

  function deleteUpcomingReservation(){

  };

  function createNewUserName(){

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

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
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