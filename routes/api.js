/*
 *
 *
 *       Complete the API routing below
 *
 *
 */

const { expect } = require("chai");
const ConvertHandler = require("../controllers/convertHandler.js");

module.exports = app => {
  const convertHandler = new ConvertHandler();

  app.route("/api/convert").get((req, res) => {
    const { input } = req.query;
    const initNum = convertHandler.getNum(input);
    const initUnit = convertHandler.getUnit(input);
    const returnNum = convertHandler.convert(initNum, initUnit);
    if (initNum === "invalid number" && initUnit === "invalid unit") {
      return res.send("invalid number and unit");
    }
    if (initNum === "invalid number") {
      res.send("invalid number");
    }
    if (initUnit === "invalid unit") {
      return res.send("invalid unit");
    }

    const returnUnit = convertHandler.getReturnUnit(initUnit);
    const toString = convertHandler.getString(
      initNum,
      initUnit,
      returnNum,
      returnUnit
    );

    return res.send({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string: toString
    });
  });
};
