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
        this.currentUser;
    };

    getCurrentDate(){
        let today = new Date();
        let year = today.getFullYear();
        let month = String(today.getMonth()+1).padStart(2, '0');
        let day = String(today.getDate()).padStart(2, '0');
        this.currentDate = `${year}/${month}/${day}`;
      };

     
    findAvailableRooms(date){
      let bookedRooms = this.bookings.filter(booking => booking.date === date);
      const isAvailable = (room) => { 
    return bookedRooms.reduce((acc, cur) => {
        if(cur.roomNumber === room.number){
            acc = false;
        }; 
        return acc
    }, true)};
        this.availableRooms = this.rooms.filter(room => isAvailable(room))
        return this.availableRooms
    }


    filterRoomsByType(roomType){
        let roomSelected = this.rooms.filter(room => room.roomType  === roomType);
        return roomSelected
    }

    findCurrentUser(userName){
       let customerUserName = userName.split('customer')
       console.log(`customerId`, customerUserName[1])
       let customerId = this.customers.find(customer => customer.id === parseInt(customerUserName[1]))
       console.log(`customerId`, customerId)
       return customerId
    }

    checkValidLoginData(login, password){
        let match = this.findCurrentUser(login) || 'noMatch' 
        console.log(`match.userName`, match.userName)
        if (login === match.userName && password === 'overlook2021'){
            return true
        } else {
            return false
        }
    }
 

};







export default Hotel;



