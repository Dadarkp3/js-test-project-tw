"use strict";

const chai = require("chai");
const expect = chai.expect;
const bookings = require("../src/bookings");
const data = require("../database/hotels.json");

describe("bookings", function () {
  describe("calculateTotalValueByHotel", function () {
    context("Case 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)", function () {
      const hotel = data.hotels[0];
      const days = { weekdays: 1, weekends: 2 };
      it("should return the value 330", function () {
        expect(bookings.calculateTotalValueByHotel(hotel, days)).to.equal(290);
      });
    });

    context("Case 3 days weekdays", function () {
      const hotel = data.hotels[0];
      const days = { weekdays: 3, weekends: 0 };
      it("should return the value 240", function () {
        expect(
          bookings.calculateTotalValueByHotel(hotel, days, "fidelidade")
        ).to.equal(240);
      });
    });
  });
});
