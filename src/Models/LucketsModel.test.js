import assert from "assert";
import { getRootLucket, getChildrenLuckets, getParentLucket, getNewLucket } from "./LuketsModel";

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
});
