/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  let notNumbers;

  this.getNum = input => {
    let result = input.match(/[a-z]+|[^a-z]+/gi);

    if (
      result[0] === "L" ||
      result[0] === "gal" ||
      result[0] === "kg" ||
      result[0] === "lbs" ||
      result[0] === "mi" ||
      result[0] === "km"
    ) {
      notNumbers = true;
      result = 1;
      return result;
    }
    if (result[0].split("/").length - 1 > 1) {
      return "invalid number";
    }

    const toDecimal = result[0].split("/");

    const value =
      toDecimal.length > 1 ? toDecimal[0] / toDecimal[1] : Number(toDecimal[0]);

    notNumbers = false;

    return Number.isNaN(value) ? "invalid number" : value;
  };

  this.getUnit = input => {
    const result = input.match(/[a-z]+|[^a-z]+/gi);
    if (notNumbers) {
      return result[0];
    }
    if (
      result[1] === "L" ||
      result[1] === "gal" ||
      result[1] === "kg" ||
      result[1] === "lbs" ||
      result[1] === "mi" ||
      result[1] === "km"
    ) {
      return result[1];
    }
    return "invalid unit";
  };

  this.getReturnUnit = initUnit => {
    let result;

    switch (initUnit) {
      case "gal":
        result = "L";
        break;
      case "L":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = unit => {
    let result;

    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "L":
        result = "liters";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometers";
        break;
      default:
        result = "invalid unit";
    }

    return result;
  };

  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    const lToGal = 0.264172;
    const kgToLbs = 2.20462;
    const kmToMi = 0.621371;

    let result;

    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum * lToGal;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum * kgToLbs;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum * kmToMi;
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    const result = `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;

    return result;
  };
}

module.exports = ConvertHandler;
