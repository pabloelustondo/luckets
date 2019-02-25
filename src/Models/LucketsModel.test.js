import assert from "assert";
import { getRootLucket, getChildrenLuckets, getParentLucket, getNewLucket, getLucketById, updateLucket } from "./LuketsModel";

describe("LucketsModel", function() {
  describe("getRootLucket", function() {
    it("should return the lucket that has not parent", function() {
      let luckets = [
        { parent: "a", name: "x" },
        { parent: "", name: "y" },
        { parent: "b", name: "z" }
      ];
      let rootLucket = getRootLucket(luckets);

      assert.equal(rootLucket.name, "y");
    });
  });

  describe("getRootLucket", function() {
    it("should return the children luckets for a give n focus luckrt", function() {
      let luckets = [
        { parent: "a", name: "x" },
        { parent: "", name: "y" },
        { parent: "", name: "b" },
        { parent: "b", name: "z" },
        { parent: "b", name: "q" },
        { parent: "b", name: "w" }
      ];
      let focusLucket = { parent: "", name: "b" };

      let childrenLuckets = getChildrenLuckets(luckets, focusLucket);
      console.log('childrenLuckets', childrenLuckets)
      assert.equal(childrenLuckets.length, 3);
    });
  });

  describe("getParentLucket", function() {
    it("should return the parent lucket for a given lucket", function() {
      let luckets = [
        { parent: "a", name: "x" },
        { parent: "", name: "y" },
        { parent: "", name: "b" },
        { parent: "b", name: "z" },
        { parent: "b", name: "q" },
        { parent: "b", name: "w" }
      ];
      let lucket = { parent: "b", name: "q" };

      let parentLucket = getParentLucket(luckets, lucket);
      assert.equal(parentLucket.name,"b");
    });
  });


  describe("getNewLucket", function() {
    it("should return a new lucket for a given a parent lucket", function() {
      let parentLucket = { parent: "b", name: "q" };

      let newLucket = getNewLucket(parentLucket);
      assert.equal(newLucket.name,"NEW");
      assert.equal(newLucket.parent,"q");
      assert.equal(newLucket.status,"white");
    });
  });


  describe("updateLucket", function() {
    it("should return a the list of luckets with the updated lucket", function() {

      let luckets = [
        { id:"x", parent: "a", name: "x" },
        { id:"y", parent: "", name: "y" },
        { id:"b", parent: "", name: "b" },
        { id:"z", parent: "b", name: "z" },
        { id:"q", parent: "b", name: "q" },
        { id:"w", parent: "b", name: "w" }
      ];

      let expectedLuckets = [
        { id:"x", parent: "a", name: "x" },
        { id:"y", parent: "", name: "y" },
        { id:"b", parent: "", name: "b" },
        { id:"z", parent: "b", name: "z" },
        { id:"q", parent: "b", name: "q" },
        { id:"w", parent: "b", name: "w" }
      ];

      let updatedLucket =   { id:"z", parent: "b", name: "zz" };
      let newLuckets = updateLucket(luckets, updatedLucket);
      let foundLucket = getLucketById(newLuckets, updateLucket.id);
      assert.equal(luckets,expectedLuckets);

    });
  });
});
