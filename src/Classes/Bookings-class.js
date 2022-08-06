
import Customer from './Customers-class';
import Room from './Rooms-class';

class Booking {
    constructor(bookingData){
        this.id= bookingData.id;
        this.userID= bookingData.userID;
        this.date= bookingData.date;
        this.roomNumber= bookingData.roomNumber;
    }
}




export default Booking;