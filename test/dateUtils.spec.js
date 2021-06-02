"use strict";

const chai = require("chai");
const expect = chai.expect;
const utils = require("../src/utils/dateUtils");

describe("dateUtils", function () {
  describe("isWeekend", function () {
    context("Case 16Mar2020(mon)", function () {
      it("should return false because monday is weekday", function () {
        expect(utils.isWeekend("16Mar2020(mon)")).to.be.false;
      });
    });
    context("Case 22Mar2020(sun)", function () {
      it("should return true because sunday is weekend", function () {
        expect(utils.isWeekend("22Mar2020(sun)")).to.be.true;
      });
    });
  });

  describe("countWeekdaysandWeekends", function () {
    context(
      "Case 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)",
      function () {
        it("should return an object with 3 weekdays and 0 weekends", function () {
          const dates = ["16Mar2020(mon)", "17Mar2020(tues)", "18Mar2020(wed)"];
          const expectedResult = { weekdays: 3, weekends: 0 };
          expect(utils.countWeekdaysandWeekends(dates)).to.be.eql(
            expectedResult
          );
        });
      }
    );

    context("Case 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)", function () {
      it("should return an object with 1 weekdays and 2 weekends", function () {
        const dates = ["20Mar2020(fri)", "21Mar2020(sat)", "22Mar2020(sun)"];
        const expectedResult = { weekdays: 1, weekends: 2 };
        expect(utils.countWeekdaysandWeekends(dates)).to.be.eql(expectedResult);
      });
    });
  });
});
