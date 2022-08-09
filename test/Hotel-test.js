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
  let customer1;
  let customer2;
  let customer3;
  let customer4;
  let customer5;
  let allCustomerData;
  let booking1;
  let booking3;
  let booking2;
  let booking4;
  let booking6;
  let booking7;
  let allBookingData;
  let roomData1;
  let roomData2;
  let roomData3;
  let roomData4;
  let roomData5;
  let roomData6;
  let roomData7;
  let allRoomData;
  let hotelInfo;
  let currentDate;

    beforeEach(() => {
 
        customer1 = new Customer(testCustomerData[0]);
        customer2 = new Customer(testCustomerData[1]);
        customer3 = new Customer(testCustomerData[2]);
        customer4 = new Customer(testCustomerData[3]);
        customer5 = new Customer(testCustomerData[4]);
        allCustomerData = [customer1, customer2, customer3, customer4, customer5];
        booking1 = new Booking(testBookingData[0]);
        booking2 = new Booking(testBookingData[1]);
        booking3 = new Booking(testBookingData[2]);
        booking4 = new Booking(testBookingData[3]);
        booking6 = new Booking(testBookingData[5]);
        booking7 = new Booking(testBookingData[8]);
        allBookingData = [booking1, booking2, booking3, booking4, booking7];
        roomData1 = new Room(testRoomData[0]);
        roomData2 = new Room(testRoomData[1]);
        roomData3 = new Room(testRoomData[2]);
        roomData4 = new Room(testRoomData[3]);
        roomData5 = new Room(testRoomData[4]);
        roomData6 = new Room(testRoomData[5]);
        roomData7 = new Room(testRoomData[6]);
        allRoomData = [roomData1, roomData2, roomData3, roomData4, roomData5, roomData6];
        hotelInfo = new Hotel(currentDate, allRoomData, allBookingData, allCustomerData);
        // currentDate = hotelInfo.getCurrentDate();
		    
    });
    it('should be a function', () => {
        expect(Hotel).to.be.a('function');
      });
      it('should have a method to create a current date', () => {
        let today = new Date();
        hotelInfo.date = `${today.getFullYear()}/${(today.getMonth()+1)}/${today.getDate()}`;
        expect(hotelInfo.getCurrentDate()).to.deep.equal(hotelInfo.currentdate);
     });
      it('should store data with all roomsData', () => {
        expect(hotelInfo.rooms).to.deep.equal(allRoomData);
      });
      it('should store allcustomerData', () => {
        expect(hotelInfo.customers).to.deep.equal(allCustomerData);
      });
      it('should store all bookingsData', () => {
		    expect(hotelInfo.bookings).to.deep.equal(allBookingData)
	     });
      it('find available rooms', () => {
        expect(hotelInfo.availableRooms).to.deep.equal([])
        hotelInfo.findAvailableRooms("2022/04/22")
        
        expect(hotelInfo.availableRooms).to.deep.equal( [
           {
            number: 24,
            roomType: 'suite',
            bidet: false,
            bedSize: 'full',
            numBeds: 2,
            costPerNight: 477.38
          },
           {
            number: 12,
            roomType: 'single room',
            bidet: false,
            bedSize: 'king',
            numBeds: 1,
            costPerNight: 491.14
          },
           {
            number: 7,
            roomType: 'single room',
            bidet: false,
            bedSize: 'queen',
            numBeds: 1,
            costPerNight: 429.44
          },
           {
            number: 14,
            roomType: 'single room',
            bidet: true,
            bedSize: 'queen',
            numBeds: 2,
            costPerNight: 340.17
          }
        ]);
        
    });
  });