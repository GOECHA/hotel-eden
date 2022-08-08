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


     pastBookingTotal() {
        this.getHotelInfo().getCurrentDate()
        let today = this.hotelInfo.currentDate
          let pastTotal = this.bookingData.filter(booking => {
            if(parseInt(booking.date.charAt(3)) < parseInt(today.charAt(3))){
              this.pastBookings.push(booking)
            }
           return booking
           }) 
          return pastTotal
     };

      calculatePastAmountSpent(booking){
        this.pointsEarned = this.pastBookingTotal(booking).reduce((acc , cur) => {
          acc += cur.roomData.costPerNight
          return acc
        }, 0);
        return this.pointsEarned
      };

     upcomingBookingTotal() {
        this.getHotelInfo().getCurrentDate()
        let today = this.hotelInfo.currentDate
        let futureTotal = this.bookingData.filter(booking => {
         if (parseInt(booking.date.charAt(3)) > parseInt(today.charAt(3))){
          this.upcomingBookings.push(booking)
         } else {
          return ``
         }
         return booking
        }) 
        return futureTotal
     };

    

      calculateFutureTripBalance(bookings){
        console.log(`bookings`, bookings)
        console.log(`upComingBookingTotal(bookings)`, upComingBookingTotal(bookings))
        this.futureBalance = upComingBookingTotal(bookings).reduce((acc , cur) => {
          console.log(`cur2`, cur) 
            acc += cur.roomData.costPerNight
          console.log(1234567, acc)
            return acc
      }, 0);
      return this.futureBalance
      };

     calculateTotalAmountSpent(bookings) {
       console.log(`pastBookingTotal()`, this.pastBookingTotal(bookings))
       this.totalAmountSpent += calculatePastAmountSpent(bookings) + calculateFutureTripBalance(bookings)
       return this.totalAmountSpeant
     }

     
};








export default Customer;