import assert from "assert";
import { getPath, getRootLucket, getChildrenLuckets, getParentLucket, getNewLucket, getLucketById, updateLucket } from "./LuketsModel";

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
      console.log('childrenLuckets', childrenLuckets)
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
      assert.equal(parentLucket.id,"b");
    });
  });


  describe("getNewLucket", function() {
    it("should return a new lucket for a given a parent lucket", function() {
      let parentLucket = { parent: "b", id: "q" };

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
        { id:"z", parent: "b", name: "zz" },
        { id:"q", parent: "b", name: "q" },
        { id:"w", parent: "b", name: "w" }
      ];

      let updatedLucket =   { id:"z", parent: "b", name: "zz" };
      let newLuckets = updateLucket(luckets, updatedLucket);
      let foundLucket = getLucketById(newLuckets, updateLucket.id);


      assert.equal(JSON.stringify(newLuckets),JSON.stringify(expectedLuckets));
      assert.equal(JSON.stringify(updateLucket),JSON.stringify(foundLucket));

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


});
