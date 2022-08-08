import { expect } from 'chai';
import Booking from '../src/classes/Bookings-class.js';
import Room from '../src/Classes/Rooms-class.js';
import Customer from '../src/classes/Customers-class.js';
import Hotel from "../src/classes/Hotel-class";
const data = require('../src/test-data/all-test-data.js');
const testCustomerData = data.customerTestData;
const testBookingData = data.bookingsTestData;
const testRoomData = data.roomTestData;


describe('Hotel', () => {
   let customer;
   let booking;
   let room;
   let hotel;


    beforeEach(() => {
        customer = new Customer(testCustomerData[0]);
		booking = new Booking(testBookingData[0]);
		room = new Room(testRoomData[0]);
        hotel = new Hotel();
		// hotel = new Hotel(bookingsData, roomsData, customerData);
    });
    it('should be a function', () => {
        expect(Hotel).to.be.a('function');
      });
      it('should have a method to create a current date', () => {
        let today = new Date();
        hotel.date = `${today.getFullYear()}/${(today.getMonth()+1)}/${today.getDate()}`;
        expect(hotel.getCurrentDate()).to.deep.equal(hotel.currentdate);
     });
      it.skip('should store data with all roomsData', () => {
        expect(hotel.rooms).to.deep.equal(roomsData);
      });
      it.skip('should store allcustomerData', () => {
        expect(hotel.customerData[2].name).to.equal(customerData[2].name);
      });
      it.skip('should store all bookingsData', () => {
		expect(hotel.bookingsData[2].userID).to.equal(bookingsData[2].userID)
	  });
     
    });