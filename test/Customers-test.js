import { expect } from 'chai';
// import Recipe from '../src/classes/Rooms-class.js';
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

    beforeEach(() => {
        customer1 = new Customer(testCustomerData[0]);
        customer2 = new Customer(testCustomerData[1]);
        customer3 = new Customer(testCustomerData[2]);
        customer4 = new Customer(testCustomerData[3]);
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
      it.skip('should have a record of pastBookings', () => {
        expect(customer1.name).to.equal('Leatha Ullrich');
        expect(customer2.name).to.equal('Rocio Schuster');
      });
      it.skip('should have a record of upcomingBookings', () => {
        expect(customer1.name).to.equal('Leatha Ullrich');
        expect(customer2.name).to.equal('Rocio Schuster');
      });
});

//still need to build functions for pastBookings and upcomingBookings
