
import './css/styles.css';
import { getAllData } from './apiCalls';
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
const calendar = document.querySelector('.calendar-input');
const welcomeMessage = document.querySelector(".welcome-message");
const pastTrips = document.querySelector(".list-past-trips");
const futureTrips = document.querySelector(".list-upcoming-trips");
const totalPoints = document.querySelector(".points-earned");
const futureBalanceTotal = document.querySelector(".future-balance");
const calendarError2 = document.querySelector(".calendar-error-2");
const bookingContainer = document.querySelector(".book-a-room-feature-image-container");
const roomTypeBtn1 = document.querySelector(".roomTypeBtn");
const bookRoomLeftGrid = document.querySelector(".book-a-room-left-side-grid");
const bookingStatus = document.querySelector(".need-to-login-error");
const toLoginBtn = document.querySelector(".loginBtn");
const userNameInput = document.querySelector(".userName");
const passWordInput = document.querySelector(".passWord");
const refreshSearchBtn = document.querySelector(".refresh-search-btn");
const bookRoomGrid = document.querySelector(".b-head-grid");
const availableRoomInfo =  document.querySelector(".ul");
const invalidLoginError = document.querySelector(".invalid-login-error");
const signUp = document.querySelector(".sign-up-text");
const signUpText = document.querySelector(".sign-up-text-2");

// ~~~~~~~~~~~~~~~~~~~~~Event Listeners~~~~~~~~~~~~~~~~~~~~~~

window.addEventListener('load', getData);
loginBtn.addEventListener(`click`, goToLoginPage);
toLoginFromBook.addEventListener(`click`, goToLoginPage);
redirectText.addEventListener('click', backToHome);
toHomeFromBook.addEventListener('click', backToHome);
backHome.addEventListener('click', backToHomeFromLogin);
bookARoomNav.addEventListener('click', goToBookARoom);
bookARoomFooter.addEventListener('click', goToBookARoom);
searchCalendar.addEventListener("click", searchForRoom);
bookingContainer.addEventListener("click", filterRoomsByType);
toLoginBtn.addEventListener("click", loginByUserName);
refreshSearchBtn.addEventListener("click", refreshSearch);
signUp.addEventListener("click", signIn);
signUpText.addEventListener("click", signIn);


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
let addBooking;





// ~~~~~~~~~~~~~~~~~~~~~Functions~~~~~~~~~~~~~~~~~~~~~~
  function getData() {
    getAllData.then((data) => {
    console.log('data', data)
    customerData = data[0].customers.map(customer => new Customer(customer));
    customer = new Customer(customerData[Math.floor(Math.random() * 41)]);
    allRoomsData = data[1].rooms.map(room => new Room(room));
    bookingData = data[2].bookings.map(booking => new Booking(booking));
    addBooking = data[3];
    loadData();
  });
  };
 

  function loadData(){
    console.log(`roomData`, allRoomsData)
    hotel = new Hotel(currentDate, allRoomsData, bookingData,  customerData);
    loadCustomerData();
  };

  function loadCustomerData(){
    updateCustomerWelcome();
    showPastBookings();
    showUpcomingBookings();
    displayPoints();
    displayFutureBalance();
  };


  function backToHome(){
   hide(loginPage);
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
  };

  function signIn(){
    hide(loginPage);
    hide(bookARoomPage);
    hide(mainContainer);
    show(redirectContainer);
  };


  function updateCustomerWelcome() {
    welcomeMessage.innerHTML = '';
    let customerName = document.createElement('h4')
    customerName.innerHTML = `Welcome, <b> ${customer.name}!`;
    welcomeMessage.appendChild(customerName)  
  };


  function showPastBookings(){
    customer.getCustomerBookings(hotel.bookings, hotel.rooms)
    customer.allBookingsTotal()
    pastTrips.innerHTML = '';
    customer.pastBookings.forEach(booking => {
      let pastTrip = document.createElement('h5')
      pastTrip.innerText = booking.date
      pastTrips.appendChild(pastTrip)
      });
    };


    function showUpcomingBookings(){
      customer.getCustomerBookings(hotel.bookings, hotel.rooms)
      customer.allBookingsTotal()
      futureTrips.innerHTML = '';
      customer.upcomingBookings.forEach(booking => {
          let upcomingTrip = document.createElement('h5')
          upcomingTrip.innerText = booking.date
          futureTrips.appendChild(upcomingTrip)
          });
    };

    function displayPoints (){
      customer.calculatePointsEarned()
      totalPoints.innerHTML = '';
      let allPoints = document.createElement('h5')
      allPoints.innerText = customer.pointsEarned.toFixed(0)
      totalPoints.appendChild(allPoints)
    };

    function displayFutureBalance(){
      customer.calculateFutureBalance()
      futureBalanceTotal.innerHTML = '';
      let futureBalance = document.createElement('h5')
      futureBalance.innerText = `$${customer.futureBalance.toFixed(0)}`
      futureBalanceTotal.appendChild(futureBalance)
    };

      function searchForRoom(){
        if(calendar.value === ``){
          show(calendarError2);  
        } else {
          let calendarInput = calendar.value.split("-").join("/");
          hotel.findAvailableRooms(calendarInput);
          createRoomTypeBtn();
        }

      };

      function createRoomTypeBtn(){
        let reduced = hotel.availableRooms.reduce((acc, cur) => {
          if(!acc.includes(cur.roomType)){
            acc.push(cur.roomType)
          }
          return acc
        }, [])
        reduced.forEach(roomType => {
          let button = document.createElement('button')
          button.classList.add('roomTypeBtn') 
          button.innerText = roomType
          bookingContainer.appendChild(button)
        })
      };


  function filterRoomsByType(event){
      let clickRoomType = event.target.closest(".roomTypeBtn")
      let filteredRooms = hotel.filterRoomsByType(clickRoomType.innerText)
      console.log(`filteredRooms`, filteredRooms)
      showAvailableRooms(filteredRooms)
  };


  function showAvailableRooms(filteredRooms){
    filteredRooms.forEach(room => {
      console.log(room)
      let newArticle = document.createElement('article')
      let bookRoomBtn = document.createElement('button')
      bookRoomBtn.innerText = "Reserve"
      bookRoomBtn.id = room.number
      bookRoomBtn.classList.add('bookRoomBtn')
      bookRoomBtn.addEventListener("click", bookARoom)
      newArticle.classList.add('b-head-grid')
      newArticle.innerHTML = `<ul> <h5>Room Number:${room.number}</h5><li>Room Type: ${room.roomType}</li> <li> Has a Bidet:${room.bidet}</li> <li> Bed Size: ${room.bedSize}</li><li> Number of Beds: ${room.numBeds}</li><li> Price per Night: ${room.costPerNight}</li>`
      newArticle.appendChild(bookRoomBtn) 
      bookRoomLeftGrid.appendChild(newArticle)  
        })
  };

  function bookARoom(event){
    let calendarInput = calendar.value.split("-").join("/");
    let id = event.target.id
    if (customer === undefined) {
      show(bookingStatus);
    } else { 
      show(bookingStatus);
       bookingStatus.style.color = `#57CC99`;
       bookingStatus.innerText = `Reservation Confirmed!`;
       let booking = {
      userID: customer.id,
      date: calendarInput,
      roomNumber: parseInt(id),
      };
      addBooking(booking).then((newRes) => console.log(newRes));
      }
  };

  function refreshSearch() {
    hide(calendarError2);
    hide(bookingStatus);
    hide(roomTypeBtn1);
    hide(bookRoomGrid);
    hide(availableRoomInfo);
  };



  function loginByUserName(e){
    hide(invalidLoginError);
    e.preventDefault();
    if(hotel.checkValidLoginData(userNameInput.value, passWordInput.value)){
      customer = hotel.findCurrentUser(userNameInput.value)
      customer.getCustomerBookings(hotel.bookings, hotel.rooms)
      console.log(`customer`, customer)
      loadCustomerData();
      backToHome();
    } else {
      show(invalidLoginError)
    }
    userNameInput.value = ``
    passWordInput.value = `` 
  };

 








































































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