import { getRootLucket } from '../src/Models/LuketsModel';
let assert = require('assert');


describe('LucketsModel', function() {

  describe('getRootLucket', function() {
    it('should return the lucket that has not parent', function() {

      let luckets = [
        {parent:"a", name:"x" },
        {parent:"",  name:"y" },
        {parent:"b", name:"z"}
      ]
      let rootLucket = getRootLucket(luckets);

      assert.equal( rootLucket.name, "y");
    });
  });
});