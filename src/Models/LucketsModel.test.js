import assert from "assert";
import {
  getPath,
  getRootLucket,
  getChildrenLuckets,
  getParentLucket,
  getNewLucket,
  getLucketById,
  updateLucket,
  filterForDo,
    cleanActionStatus,
  LucketsList2Object,
    calculatePoints
} from "./LuketsModel";

describe("LucketsModel", function() {
  describe("getRootLucket", function() {
    it("should return the lucket that has not parent", function() {
      let luckets = [
        { parent: "a", id: "x" },
        { parent: "", id: "y" },
        { parent: "b", id: "z" }
      ];
      let rootLucket = getRootLucket(luckets);

      assert.equal(rootLucket.id, "y");
    });
  });

  describe("getRootLucket", function() {
    it("should return the children luckets for a give n focus luckrt", function() {
      let luckets = [
        { parent: "a", id: "x" },
        { parent: "", id: "y" },
        { parent: "", id: "b" },
        { parent: "b", id: "z" },
        { parent: "b", id: "q" },
        { parent: "b", id: "w" }
      ];
      let focusLucket = { parent: "", id: "b" };

      let childrenLuckets = getChildrenLuckets(luckets, focusLucket);
      console.log("childrenLuckets", childrenLuckets);
      assert.equal(childrenLuckets.length, 3);
    });
  });

  describe("getParentLucket", function() {
    it("should return the parent lucket for a given lucket", function() {
      let luckets = [
        { parent: "a", id: "x" },
        { parent: "", id: "y" },
        { parent: "", id: "b" },
        { parent: "b", id: "z" },
        { parent: "b", id: "q" },
        { parent: "b", id: "w" }
      ];
      let lucket = { parent: "b", id: "q" };

      let parentLucket = getParentLucket(luckets, lucket);
      assert.equal(parentLucket.id, "b");
    });
  });

  describe("getNewLucket", function() {
    it("should return a new lucket for a given a parent lucket", function() {
      let parentLucket = { parent: "b", id: "q" };

      let newLucket = getNewLucket(parentLucket);
      assert.equal(newLucket.name, "NEW");
      assert.equal(newLucket.parent, "q");
      assert.equal(newLucket.status, "white");
    });
  });

  describe("updateLucket", function() {
    it("should return a the list of luckets with the updated lucket", function() {
      let luckets = [
        { id: "x", parent: "a", name: "x" },
        { id: "y", parent: "", name: "y" },
        { id: "b", parent: "", name: "b" },
        { id: "z", parent: "b", name: "z" },
        { id: "q", parent: "b", name: "q" },
        { id: "w", parent: "b", name: "w" }
      ];

      let expectedLuckets = [
        { id: "x", parent: "a", name: "x" },
        { id: "y", parent: "", name: "y" },
        { id: "b", parent: "", name: "b" },
        { id: "z", parent: "b", name: "zz" },
        { id: "q", parent: "b", name: "q" },
        { id: "w", parent: "b", name: "w" }
      ];

      let updatedLucket = { id: "z", parent: "b", name: "zz" };
      let newLuckets = updateLucket(luckets, updatedLucket);
      let foundLucket = getLucketById(newLuckets, updateLucket.id);

      assert.equal(JSON.stringify(newLuckets), JSON.stringify(expectedLuckets));
      assert.equal(JSON.stringify(updateLucket), JSON.stringify(foundLucket));
    });
  });

  describe("getPath", function() {
    it("should return the ancestry of the focusLucket ", function() {
      let luckets = [
        { parent: "", id: "a" },
        { parent: "a", id: "b" },
        { parent: "b", id: "c" },
        { parent: "c", id: "d" },
        { parent: "d", id: "e" },
        { parent: "e", id: "f" }
      ];
      let focusLucket = { parent: "c", id: "d" };

      let path = getPath(luckets, focusLucket);
      assert.equal(path.length, 3);
    });
  });

  describe("filter for Do", function() {
    it("should out the black first", function() {
      let luckets = [
        { actionStatus: "green" },
        { actionStatus: "blue" },
        { actionStatus: "red" },
        { actionStatus: "yellow" },
        { actionStatus: "black" },
        { actionStatus: "purple" },
        { actionStatus: "white" }
      ];

      let result = filterForDo(luckets);
      assert.equal(result[0].actionStatus, "black");
    });

    it("should out the red first if no black", function() {
      let luckets = [
        { actionStatus: "green" },
        { actionStatus: "blue" },
        { actionStatus: "red" },
        { actionStatus: "yellow" },
        { actionStatus: "purple" },
        { actionStatus: "white" }
      ];

      let result = filterForDo(luckets);
      assert.equal(result[0].actionStatus, "red");
    });

    it("should out the green first if no black and red and yellow", function() {
      let luckets = [
        { actionStatus: "purple" },
        { actionStatus: "white" },
        { actionStatus: "green" },
        { actionStatus: "blue" }
      ];

      let result = filterForDo(luckets);
      assert.equal(result[0].actionStatus, "green");
    });

    it("should out the yellow first if no green black and red", function() {
      let luckets = [
        { actionStatus: "purple" },
        { actionStatus: "yellow" },
        { actionStatus: "white" },
        { actionStatus: "blue" }
      ];

      let result = filterForDo(luckets);
      assert.equal(result[0].actionStatus, "yellow");
    });

    it("should out the blue first if no yellow green black and red", function() {
      let luckets = [
        { actionStatus: "purple" },
        { actionStatus: "white" },
        { actionStatus: "blue" }
      ];

      let result = filterForDo(luckets);
      assert.equal(result[0].actionStatus, "blue");
    });

    it("should remove all whites", function() {
      let luckets = [
        { actionStatus: "green" },
        { actionStatus: "blue" },
        { actionStatus: "red" },
        { actionStatus: "yellow" },
        { actionStatus: "purple" },
        { actionStatus: "white" }
      ];

      let result = filterForDo(luckets);
      const whitesInResult = result.filter( l => l.actionStatus==="white");
      assert.equal(result.length, 5);
      assert.equal(whitesInResult.length,0);

    });

  });

  describe("Clean DAction Status ", function() {
    it("should out all the action status in white", function() {
      let luckets = [
        { actionStatus: "green" },
        { actionStatus: "blue" },
        { actionStatus: "red" },
        { actionStatus: "yellow" },
        { actionStatus: "black" },
        { actionStatus: "purple" },
        { actionStatus: "white" }
      ];

      let result = cleanActionStatus(luckets);
      result.forEach((l) => {
        assert.equal(l.actionStatus, "white");
      })
    });
  });


  describe("LucketsList2Object ", function() {
    it("should return an object with all the elements of the array by id", function() {
      let luckets = [
        { id: "green" },
        { id: "blue" },
        { id: "red" },
        { id: "yellow" },
        { id: "black" },
        { id: "purple" },
        { id: "white" }
      ];

      let result = LucketsList2Object(luckets);

      for (l in result) {
        assert.equal(result[l.id].id, l.id);
      }

    });
  });

  describe("Calculate Points ", function() {
    it("no blues, should return total and actions points based on itself if no children", function() {
      let luckets = [
        { id: "A11" , parent:"A1", actionPoints: 1 },  //0
        { id: "A12" , parent: "A1",actionPoints: 1 },  //1
        { id: "Root" , parent:"",actionPoints: 1}, //2
        { id: "A" , parent:"Root",actionPoints: 1}, //3
        { id: "B" , parent:"Root",actionPoints: 1}, //4
        { id: "A1", parent:"A",actionPoints: 1 }, //5
        { id: "A2", parent:"A" ,actionPoints: 1}, //6
        { id: "B1", parent:"B" ,actionPoints: 1}, //7
        { id: "B2", parent:"B" ,actionPoints: 1}, //8
      ];

      const lucket =  getLucketById(luckets,"A11");  //A11

      const result = calculatePoints(luckets, lucket);

      assert.equal(result.id, "A11");
      assert.equal(result.totalActionPoints, 1);
      assert.equal(result.doneActionPoints, 0);

    });

    it("no blues, should return total and actions points based oon two children", function() {
      let luckets = [
        { id: "A11" , parent:"A1", actionPoints: 1 },  //0
        { id: "A12" , parent: "A1",actionPoints: 1 },  //1
        { id: "Root" , parent:"",actionPoints: 1}, //2
        { id: "A" , parent:"Root",actionPoints: 1}, //3
        { id: "B" , parent:"Root",actionPoints: 1}, //4
        { id: "A1", parent:"A",actionPoints: 1 }, //5
        { id: "A2", parent:"A" ,actionPoints: 1}, //6
        { id: "B1", parent:"B" ,actionPoints: 1}, //7
        { id: "B2", parent:"B" ,actionPoints: 1}, //8
      ];

      const lucket =  getLucketById(luckets,"A1");  //A11

      const result = calculatePoints(luckets, lucket);

      assert.equal(result.id, "A1");
      assert.equal(result.totalActionPoints, 3);
      assert.equal(result.doneActionPoints, 0);

    });

    it("1 blue, should return total and actions points based oon two children", function() {
      let luckets = [
        { id: "A11" , parent:"A1", actionPoints: 1 , actionStatus: "blue"},  //0
        { id: "A12" , parent: "A1",actionPoints: 1 },  //1
        { id: "Root" , parent:"",actionPoints: 1}, //2
        { id: "A" , parent:"Root",actionPoints: 1}, //3
        { id: "B" , parent:"Root",actionPoints: 1}, //4
        { id: "A1", parent:"A",actionPoints: 1 }, //5
        { id: "A2", parent:"A" ,actionPoints: 1}, //6
        { id: "B1", parent:"B" ,actionPoints: 1}, //7
        { id: "B2", parent:"B" ,actionPoints: 1}, //8
      ];

      const lucket =  getLucketById(luckets,"A1");  //A11

      const result = calculatePoints(luckets, lucket);

      assert.equal(result.id, "A1");
      assert.equal(result.totalActionPoints, 3);
      assert.equal(result.doneActionPoints, 1);

    });

    it("2 blues, should return total and actions points based oon two children", function() {
      let luckets = [
        { id: "A11" , parent:"A1", actionPoints: 1 , actionStatus: "blue"},  //0
        { id: "A12" , parent: "A1",actionPoints: 1 },  //1
        { id: "Root" , parent:"",actionPoints: 1}, //2
        { id: "A" , parent:"Root",actionPoints: 1}, //3
        { id: "B" , parent:"Root",actionPoints: 1}, //4
        { id: "A1", parent:"A",actionPoints: 1, actionStatus: "blue" }, //5
        { id: "A2", parent:"A" ,actionPoints: 1}, //6
        { id: "B1", parent:"B" ,actionPoints: 1}, //7
        { id: "B2", parent:"B" ,actionPoints: 1}, //8
      ];

      const lucket =  getLucketById(luckets,"A1");  //A11

      const result = calculatePoints(luckets, lucket);

      assert.equal(result.id, "A1");
      assert.equal(result.totalActionPoints, 3);
      assert.equal(result.doneActionPoints, 2);

    });

    it("2 blues, should return total and actions points based oon two children two levesl", function() {
      let luckets = [
        { id: "A11" , parent:"A1", actionPoints: 1 , actionStatus: "blue"},  //0
        { id: "A12" , parent: "A1",actionPoints: 1 },  //1
        { id: "Root" , parent:"",actionPoints: 1}, //2
        { id: "A" , parent:"Root",actionPoints: 1}, //3
        { id: "B" , parent:"Root",actionPoints: 1}, //4
        { id: "A1", parent:"A",actionPoints: 1, actionStatus: "blue" }, //5
        { id: "A2", parent:"A" ,actionPoints: 1}, //6
        { id: "B1", parent:"B" ,actionPoints: 1}, //7
        { id: "B2", parent:"B" ,actionPoints: 1}, //8
      ];

      const lucket =  getLucketById(luckets,"A");  //A11

      const result = calculatePoints(luckets, lucket);

      assert.equal(result.id, "A");
      assert.equal(result.totalActionPoints, 5);
      assert.equal(result.doneActionPoints, 2);

    });

  });

});
