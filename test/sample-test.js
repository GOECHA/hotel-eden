import chai from 'chai';
const expect = chai.expect;
const testData = require('../src/test-data/all-test-data.js');

const testBookingsData = testData.bookingsTestDataa;
const testCustomerData = testData.customerTestData;
const testRoomsData = testData.roomTestData;

//using testing format

describe('See if the tests are running', function() {
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});

