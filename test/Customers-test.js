import { expect } from 'chai';
import Booking from '../src/Classes/Bookings-class.js';
import Room from '../src/classes/Rooms-class.js';
import Customer from '../src/classes/Customers-class.js';
const data = require('../src/test-data/all-test-data.js');
const testCustomerData = data.customerTestData;
const testBookingData = data.bookingsTestData;
const testRoomData = data.roomTestData;


describe('Customer', () => {
    let customer1;
    let customer2;
    let customer3;
    let customer4;
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

    beforeEach(() => {
      allBookings = testBookingData.map((booking) => {
        return new Booking(booking)
      })
    
        customer1 = new Customer(testCustomerData[0]);
        customer2 = new Customer(testCustomerData[1]);
        customer3 = new Customer(testCustomerData[2]);
        customer4 = new Customer(testCustomerData[3]);
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
      it.skip('should have a method to hold record of pastBookings', () => {
        let customerBookings1 = customer1.getCustomerBookings(allBookings, roomData1)
        let customerBookings2 = customer2.getCustomerBookings(allBookings, roomData2)
        expect(customer1.pastBookings).to.equal(customerBookings1);
        expect(customer2.pastBookings).to.equal(customerBookings2);
      });
      it.skip('should have a method to hold record of upcomingBookings', () => {
        expect(customer1.upcomingBookings).to.deep.equal('Leatha Ullrich');
        expect(customer2.upcomingBookings).to.deep.equal('Rocio Schuster');
      });
      it.skip('should have a method to get total amount spent on bookings in dollars', () => {
        expect(customer1.totalAmountSpent).to.equal('Leatha Ullrich');
        expect(customer2.totalAmountSpent).to.equal('Rocio Schuster');
      });
});

//still need to build functions for pastBookings and upcomingBookings
