import { expect } from 'chai';
// import Recipe from '../src/classes/Rooms-class.js';
import Customer from '../src/classes/Customers-class.js';
const data = require('../src/test-data/all-test-data.js');
const testCustomerData = data.customerTestData;
// const testBookingData = data.bookingsTestData;
// const testRoomData = data.roomTestData;




describe('Customer', () => {
    let customer1;
    let customer2;


    beforeEach(() => {
        customer1 = new Customer(testCustomerData[0]);
        customer2 = new Customer(testCustomerData[1]);
    });
    it('should be a function', () => {
        expect(Customer).to.be.a('function');
      });
      it('should have an id', () => {
        expect(customer1.id).to.equal(1);
        expect(customer2.id).to.equal(2);
      });
      it('should have a name', () => {
        expect(customer1.name).to.equal('Leatha Ullrich');
        expect(customer2.name).to.equal('Rocio Schuster');
      });
});