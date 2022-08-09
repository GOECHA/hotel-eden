import Booking from './Bookings-class'
import Customer from './Customers-class'
import Room from './Rooms-class'
import dayjs from 'dayjs';

let now = dayjs()


class Hotel {
    constructor(currentDate, roomData, bookingData, customerData){
        this.currentDate = currentDate;
        this.rooms = roomData;
        this.bookings = bookingData;
        this.customers = customerData;
        this.availableRooms = [];
        // this.curentUser;
       

    }

    getCurrentDate(){
        let today = new Date();
        let year = today.getFullYear();
        let month = String(today.getMonth()+1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');
        this.currentDate = `${year}/${month}/${day}`;
      }

     
    findAvailableRooms(date){
       let bookedRooms = this.bookings.filter(booking => booking.date === date);
       const isAvailable = (room) => { 
        return bookedRooms.reduce((acc, cur) => {
           if(cur.roomNumber === room.number){
                acc = false;
           } 
           return acc
        }, true)
       }
      this.availableRooms = this.rooms.filter(room => isAvailable(room))
       return this.availableRooms
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