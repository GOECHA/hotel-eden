import { expect } from 'chai';
import Room from '../src/classes/Rooms-class.js';
const data = require('../src/test-data/all-test-data.js');
const testRoomData = data.roomTestData;


describe('Room', () => {
    let room1;
    let room2;
    let room3;
    let room4;

    beforeEach(() => {
        room1 = new Room(testRoomData[0]);
        room2 = new Room(testRoomData[1]);
        room3 = new Room(testRoomData[2]);
        room4 = new Room(testRoomData[3]);
    });
    it('should be a function', () => {
        expect(Room).to.be.a('function');
      });
      it('should have a roomNumber', () => {
        expect(room1.number).to.equal(15);
        expect(room2.number).to.equal(24);
        expect(room3.number).to.equal(12);
        expect(room4.number).to.equal(7);
      });
      it('should have a roomType', () => {
        expect(room1.roomType).to.equal('residential suite');
        expect(room2.roomType).to.equal('suite');
        expect(room3.roomType).to.equal('single room');
        expect(room4.roomType).to.equal('single room');
      });
      it('should show if a there is a bidet', () => {
        expect(room1.bidet).to.equal(true);
        expect(room2.bidet).to.equal(false);
        expect(room3.bidet).to.equal(false);
        expect(room4.bidet).to.equal(false);
      });
      it('should have a roomType', () => {
        expect(room1.bedSize).to.equal('queen');
        expect(room2.bedSize).to.equal('full');
        expect(room3.bedSize).to.equal('king');
        expect(room4.bedSize).to.equal('queen');
      });
      it('should have a roomType', () => {
        expect(room1.numBeds).to.equal(1);
        expect(room2.numBeds).to.equal(2);
        expect(room3.numBeds).to.equal(1);
        expect(room4.numBeds).to.equal(1);
      });
      it('should have a cost per night in dollars', () => {
        expect(room1.costPerNight).to.equal(358.4);
        expect(room2.costPerNight).to.equal(477.38);
        expect(room3.costPerNight).to.equal(491.14);
        expect(room4.costPerNight).to.equal(429.44);
      });
    });