import Booking from './Bookings-class'
import Customer from './Customers-class'
import dayjs from 'dayjs';

let now = dayjs()


class Hotel {
    constructor(currentDate){
        this.currentDate = currentDate
        // this.rooms = roomsData;
        // this.customers = customerData;
        // this.bookings = bookingsData.bookings;
        // this.curentUser;
        // this.availableRooms;
    }

    getCurrentDate(){
        let today = new Date();
        let year = today.getFullYear();
        let month = String(today.getMonth()+1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');
        this.currentDate = `${year}/${month}/${day}`;
      }


    findAvailableRooms(){

    }


    filterRoomsByType(){
        
    }



  

}
















export default Hotel;



// class Hotel {
//     constructor( bookingsData, roomsData, customerData){
//         this.date = 
//         this.bookings = bookingsData.bookings;
//         this.rooms = roomsData;
//         this.customers = customerData;
//         this.curentUser;
//         this.availableRooms;
//     }
// }