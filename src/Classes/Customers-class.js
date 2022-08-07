import Room from './Rooms-class';
import Booking from './Bookings-class';

class Customer {
    constructor(customerData) {
      this.id = customerData.id;
      this.name = customerData.name;
      this.bookingData = [];
      this.pastBookings = [];
      this.upcomingBookings = [];
      this.totalAmountSpent = 0;
    }


    getCustomerBookings(bookings, rooms) {
      this.bookingData = bookings.filter(booking => booking.userID === this.id) 
      this.bookingData.forEach(booking => {
        console.log(`booking`,booking)
        console.log(`booking.getRoomData(rooms)`,booking.getRoomData(rooms))
        booking.getRoomData(rooms)
      })
    }
    
     // allcustomer bookings I have an array of objects with booking info and a user ID
     // I also have another array of objects with customer info
     // The customer.id and the booking.userID
     // what I want back are all the booking objects that include
     // the customerID 
     //
     

     pastBookingTotal (bookings) {
        //get total past booking amount
       let currentDate = newDate();
        console.log(`currentDate`, currentDate)
        console.log(222222, booking)
       let pastTotal = bookings.filter(booking => {
         if (booking < currentDate){
          console.log(11111, booking)
          return booking
         }
         return pastTotal
        }) 
     };

     upcomingBookingTotal() {
        // get total booking amount
     }


     calculateTotalAmountSpent() {
         //thinking a reduce function here
     }

    // possible functions:
    // 1, should be able to book a room with a selected date
    // 2, should be able to login to account by name and id
    // 3, shoul have a history of visits
    // 4, should have a record of upcoming visits
    // 5, should have an update of total amount spent
};








export default Customer;