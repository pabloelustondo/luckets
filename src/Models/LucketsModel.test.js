import assert from "assert";
import { getRootLucket, getChildrenLuckets } from "./LuketsModel";

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
});
