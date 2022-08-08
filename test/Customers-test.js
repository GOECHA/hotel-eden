import { expect } from 'chai';
import Booking from '../src/Classes/Bookings-class.js';
import Room from '../src/classes/Rooms-class.js';
import Customer from '../src/classes/Customers-class.js';
import Hotel from "../src/classes/Hotel-class";
const data = require('../src/test-data/all-test-data.js');
const testCustomerData = data.customerTestData;
const testBookingData = data.bookingsTestData;
const testRoomData = data.roomTestData;


describe('Customer', () => {
    let customer1;
    let customer2;
    let customer3;
    let customer4;
    let customer5;
    let booking1;
    let booking3;
    let booking2;
    let booking4;
    let allBookings;
    let roomData1;
    let roomData2;
    let roomData3;
    let roomData4;
    let allRoomData;
    let hotelInfo;

    beforeEach(() => {
      allBookings = testBookingData.map((booking) => {
        return new Booking(booking)
      })
    
        customer1 = new Customer(testCustomerData[0]);
        customer2 = new Customer(testCustomerData[1]);
        customer3 = new Customer(testCustomerData[2]);
        customer4 = new Customer(testCustomerData[3]);
        customer5 = new Customer(testCustomerData[4]);
        booking1 = new Booking(testBookingData[0]);
        booking2 = new Booking(testBookingData[1]);
        booking3 = new Booking(testBookingData[2]);
        booking4 = new Booking(testBookingData[3]);
        // allBookings2 = [booking1, booking2, booking3, booking4]
        roomData1 = new Room(testRoomData[0]);
        roomData2 = new Room(testRoomData[1]);
        roomData3 = new Room(testRoomData[2]);
        roomData4 = new Room(testRoomData[3]);
        allRoomData = [roomData1, roomData2, roomData3, roomData4];
        
    });
    it('should be a function', () => {
        expect(Customer).to.be.a('function');
      });
      it('should have an id', () => {
        expect(customer1.id).to.equal(1);
        expect(customer2.id).to.equal(2);
        expect(customer3.id).to.equal(3);
        expect(customer4.id).to.equal(4);
      });
      it('should have a name', () => {
        expect(customer1.name).to.equal('Leatha Ullrich');
        expect(customer2.name).to.equal('Rocio Schuster');
        expect(customer3.name).to.equal('Kelvin Schiller');
        expect(customer4.name).to.equal('Kennedi Emard');
      });
      it('should be able to store bookings unique to the customer', () => {
        customer1.getCustomerBookings(allBookings, allRoomData)
        expect(customer1.bookingData[0].id).to.equal(booking1.id);
      })
      it('should have a method to get hotel Info', () => {
       let hotelInfo = new Hotel()
        expect(customer1.getHotelInfo()).to.deep.equal(hotelInfo);
      });
      it('should have a method to hold record of pastBookings', () => {
        customer1.getCustomerBookings(allBookings, allRoomData)


        expect(customer1.pastBookingTotal(allBookings)).to.deep.equal([
          {
            id: '5fwrgu4i7k55hl6sz',
            userID: 1,
            date: '2022/04/22',
            roomNumber: 15,
            roomData:  {
              number: 15,
              roomType: 'residential suite',
              bidet: true,
              bedSize: 'queen',
              numBeds: 1,
              costPerNight: 358.4
            }
          },
          {
            id: '5fwrgu4i7k55hl6t7',
            userID: 1,
            date: '2022/02/16',
            roomNumber: 7,
            roomData:  {
              number: 7,
              roomType: 'single room',
              bidet: false,
              bedSize: 'queen',
              numBeds: 1,
              costPerNight: 429.44
            }
          },
          {
            id: '5fwrgu4i7k55hl6t8',
            userID: 1,
            date: '2022/02/05',
            roomNumber: 12,
            roomData:  {
              number: 12,
              roomType: 'single room',
              bidet: false,
              bedSize: 'king',
              numBeds: 1,
              costPerNight: 491.14
            }
          }
        ]);
      });
      it('should have a method to get total amount spent on past bookings', () => {
        customer1.getCustomerBookings(allBookings, allRoomData);
        customer1.pastBookingTotal();
        customer2.getCustomerBookings(allBookings, allRoomData);
        customer2.pastBookingTotal();
 
 
         expect(customer1.calculatePastAmountSpent()).to.equal(1278.98)
         expect(customer1.pointsEarned).to.equal(1278.98);
         expect(customer2.calculatePastAmountSpent()).to.equal(477.38)
         expect(customer2.pointsEarned).to.equal(477.38);
       });
      it('should have a method to hold record of upcomingBookings', () => {
        customer5.getCustomerBookings(allBookings, allRoomData);


        expect(customer5.upcomingBookingTotal(allBookings)).to.deep.equal([
           {
            id: '5fwrgu4i7k55hl6t9',
            userID: 5,
            date: '2023/12/14',
            roomNumber: 14,
            roomData: undefined
          }
        ]);
      });
      it('should have a method to get total amount of future booking balance', () => {
        customer5.getCustomerBookings(allBookings, allRoomData);
        customer5.upComingBookingTotal();
      
 
         expect(customer5.calculateFutureTripBalance()).to.equal(400);
         expect(customer5.futureBalance).to.equal(400);
       });
       it.skip('should have a method to get total amount spent on bookings in dollars', () => {
        
        customer1.getCustomerBookings(allBookings, allRoomData);
        customer2.getCustomerBookings(allBookings, allRoomData);
        
 
         expect(customer1.calculateTotalAmountSpent(allBookings)).to.equal(400);
         expect(customer1.totalAmountSpent).to.equal(400);
         expect(customer2.calculateTotalAmountSpent(allBookings)).to.equal(300);
         expect(customer2.totalAmountSpent).to.equal(300);
       });
});

//still need to build functions for pastBookings and upcomingBookings
