
import Room from './Rooms-class.js'


class Booking {
    constructor(bookingData){
        this.id= bookingData.id;
        this.userID= bookingData.userID;
        this.date= bookingData.date;
        this.roomNumber= bookingData.roomNumber;
        this.roomData;
    }

    getRoomData(rooms){
        this.roomData = rooms.find(room => room.number === this.roomNumber)
        this.roomData = new Room(room)
    }
}




export default Booking;