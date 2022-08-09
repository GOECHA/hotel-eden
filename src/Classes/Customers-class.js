import Room from './Rooms-class';
import Booking from './Bookings-class';
import Hotel from './Hotel-class';


class Customer {
    constructor(customerData) {
      this.id = customerData.id;
      this.name = customerData.name;
      this.bookingData = [];
      this.pastBookings = [];
      this.upcomingBookings = [];
      this.pointsEarned = 0;
      this.futureBalance = 0;
      this.totalAmountSpent = 0;
      this.hotelInfo;
    };


    getCustomerBookings(bookings, rooms) {
      this.bookingData = bookings.filter(booking => booking.userID === this.id) 
      let bookingInfo = this.bookingData.forEach(booking => {
       return booking.getRoomData(rooms)
      })
      return bookingInfo
    };
    
     
     getHotelInfo(){
        this.hotelInfo = new Hotel()
        return this.hotelInfo
     };


     allBookingsTotal() {
        this.getHotelInfo().getCurrentDate()
        let today = this.hotelInfo.currentDate
        let datesTotal = this.bookingData.sort((a, b) => {
            return a.date - b.date
        })
        let filterAllBookings = datesTotal.filter(date => {
          if(date.date < today){
            this.pastBookings.push(date)
          } else if (date.date >= today) {
            this.upcomingBookings.push(date)
          }
          return date
        })
        return filterAllBookings
        };

    calculatePointsEarned(){
      this.pointsEarned = this.pastBookings.reduce((acc, booking) => {  
        acc += booking.roomData.costPerNight
        return acc
      }, 0)
      return this.pointsEarned
    }

    calculateFutureBalance(){
      this.futureBalance = this.upcomingBookings.reduce((acc, booking) => {  
        console.log(`booking`, booking.roomData.costPerNight)
        acc += booking.roomData.costPerNight
        return acc  
      }, 0)
      return this.futureBalance
    }


     calculateTotalAmountSpent() {
       this.totalAmountSpent = this.bookingData.reduce((acc, booking) => {  
        console.log(booking)
        acc += booking.roomData.costPerNight
        return acc
       }, 0)
       return this.totalAmountSpeant
     };

     
};








export default Customer;