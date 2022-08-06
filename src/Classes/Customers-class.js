import Recipe from './Rooms-class';
import Pantry from './Bookings-class';

class Customer {
    constructor(customerData, totalAmountSpent) {
      this.id = customerData.id;
      this.name = customerData.name;
      this.pastBookings = [];
      this.upcomingBookings = [];
      this.totalAmountSpent = totalAmountSpent
    }


  



    // possible functions:
    // 1, should be able to book a room with a selected date
    // 2, should be able to login to account by name and id
    // 3, shoul have a history of visits
    // 4, should have a record of upcoming visits
    // 5, should have an update of total amount spent
};



















export default Customer;