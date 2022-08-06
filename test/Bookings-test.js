import { expect } from 'chai';
// import Recipe from '../src/classes/Rooms-class.js';
import Booking from '../src/classes/Bookings-class.js';
const data = require('../src/test-data/all-test-data.js');
const testCustomerData = data.customerTestData;
const testBookingData = data.bookingsTestData;
const testRoomData = data.roomTestData;


describe('Booking', () => {
    let booking1;
    let booking3;
    let booking2;
    let booking4;

    beforeEach(() => {
        booking1 = new Booking(testBookingData[0]);
        booking2 = new Booking(testBookingData[1]);
        booking3 = new Booking(testBookingData[2]);
        booking4 = new Booking(testBookingData[3]);
    });
    it('should be a function', () => {
        expect(Booking).to.be.a('function');
      });
      it('should have an id', () => {
        expect(booking1.id).to.equal('5fwrgu4i7k55hl6sz');
        expect(booking2.id).to.equal('5fwrgu4i7k55hl6t5');
        expect(booking3.id).to.equal('5fwrgu4i7k55hl6t6');
        expect(booking4.id).to.equal('5fwrgu4i7k55hl6t7');
      });
      it('should have a userID', () => {
        expect(booking1.userID).to.equal(1);
        expect(booking2.userID).to.equal(2);
        expect(booking3.userID).to.equal(4);
        expect(booking4.userID).to.equal(1);
      });
      it('should have a dateBlocked', () => {
        expect(booking1.date).to.equal('2022/04/22');
        expect(booking2.date).to.equal('2022/01/24');
        expect(booking3.date).to.equal('2022/01/10');
        expect(booking4.date).to.equal('2022/02/16');
      });
      it('should have a roomNumber', () => {
        expect(booking1.roomNumber).to.equal(15);
        expect(booking2.roomNumber).to.equal(24);
        expect(booking3.roomNumber).to.equal(12);
        expect(booking4.roomNumber).to.equal(7);
      });
    });