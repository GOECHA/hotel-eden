import Recipe from './Rooms-class';
import Pantry from './Bookings-class';
import Booking from './Bookings-class';

class Customer {
    constructor(customerData, bookingData) {
      this.id = customerData.id;
      this.name = customerData.name;
      this.pastBookings = [];
      this.upcomingBookings = [];
      this.totalAmountSpent = bookingData.totalAmountSpent
    }


    getBookings = () => {
       // get total bookings for user 
       //filter all the r
    }


    pastBookingTotal = () => {
        //get total past booking amount
     let newBooking = new Booking()
     
   }

     upcomingBookingTotal = () => {
        // get total booking amount
     }


     calculateTotalAmountSpent = () => {
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