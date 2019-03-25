/*
 *
 *
 *       FILL IN EACH UNIT TEST BELOW COMPLETELY
 *       -----[Keep the tests in the same order!]----
 *       (if additional are added, keep them at the very end!)
 */

const chai = require("chai");

const { assert } = chai;
const ConvertHandler = require("../controllers/convertHandler.js");

const convertHandler = new ConvertHandler();

suite("Unit Tests", function() {
  suite("Function convertHandler.getNum(input)", function() {
    test("Whole number input", function(done) {
      const input = "32L";
      assert.equal(convertHandler.getNum(input), 32);
      done();
    });

    test("Decimal Input", function(done) {
      const input = "3.2km";
      assert.equal(convertHandler.getNum(input), 3.2);
      done();
    });

    test("Fractional Input", function(done) {
      const input = "1/2";
      assert.equal(convertHandler.getNum(input), 0.5);
      done();
    });

    test("Fractional Input w/ Decimal", function(done) {
      const input = "0.5/2km";
      assert.equal(convertHandler.getNum(input), 0.25);
      done();
    });

    test("Invalid Input (double fraction)", function(done) {
      const input = "1/5/2km";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });

    test("No Numerical Input", function(done) {
      const input = "whatever";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });
  });

  suite("Function convertHandler.getUnit(input)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      const input = ["L", "gal", "kg", "lbs", "mi", "km"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getUnit(`10${ele}`), ele);
      });
      done();
    });

    test("Unknown Unit Input", function(done) {
      const input = "kilo";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done();
    });
  });

  suite("Function convertHandler.getReturnUnit(initUnit)", function() {
    test("For Each Valid Unit Inputs", function(done) {
      const input = ["gal", "L", "mi", "km", "lbs", "kg"];
      const expect = ["L", "gal", "km", "mi", "kg", "lbs"];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.spellOutUnit(unit)", function() {
    const input = ["gal", "L", "mi", "km", "lbs", "kg"];
    const expect = [
      "gallons",
      "liters",
      "miles",
      "kilometers",
      "pounds",
      "kilograms"
    ];
    test("For Each Valid Unit Inputs", function(done) {
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      });
      done();
    });
  });

  suite("Function convertHandler.convert(num, unit)", function() {
    test("Gal to L", function(done) {
      const input = [5, "gal"];
      const expected = 18.92705;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });

    test("L to Gal", function(done) {
      const input = [5, "L"];
      const expected = 1.32086;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });

    test("Mi to Km", function(done) {
      const input = [5, "mi"];
      const expected = 8.0467;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });

    test("Km to Mi", function(done) {
      const input = [5, "km"];
      const expected = 3.10685;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });

    test("Lbs to Kg", function(done) {
      const input = [5, "lbs"];
      const expected = 2.26796;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });

    test("Kg to Lbs", function(done) {
      const input = [5, "kg"];
      const expected = 11.0231;
      assert.approximately(
        convertHandler.convert(input[0], input[1]),
        expected,
        0.1
      ); // 0.1 tolerance
      done();
    });
  });
});
