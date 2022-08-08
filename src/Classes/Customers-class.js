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

//change function name to be more semantic
     allBookingTotal() {
        this.getHotelInfo().getCurrentDate()
        let today = this.hotelInfo.currentDate
        let datesTotal = this.bookingData.sort((a, b) => {
            return a.date - b.date
        })
        let pastDatesTotal = datesTotal.filter(date => {
          if(date.date < today){
            this.pastBookings.push(date)
          } else {
            this.upcomingBookings.push(date)
          }
          return date
        })
        console.log(`this.pastBookings`, this.pastBookings)
        console.log(`this.upcomingBookings`, this.upcomingBookings)
        console.log(`pastDatesTotal11111`,pastDatesTotal)
        return pastDatesTotal
        };



      calculatePastAmountSpent(booking){
        this.pointsEarned = this.pastBookingTotal(booking).reduce((acc, cur) => {
          acc += cur.roomData.costPerNight
          console.log(`acc33333`, acc)
          return acc
        }, 0);
        return this.pointsEarned
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
     };

     
};








export default Customer;