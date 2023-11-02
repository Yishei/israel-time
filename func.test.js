/**
 * @jest-environment jsdom
 */
const { timeConverter, isDLS } = require("./func.js");

describe("isDLS", () => {
  it("3/26/2021 1:59 should retern False becuse befure 2", () => {
    const date = new Date(2021, 2, 26, 1, 59);
    const result = isDLS(date);
    expect(result).toBe(false);
  });
  it("1/26/2021 1:59 should retern False becuse befure last Friday", () => {
    const date = new Date(2021, 0, 26, 1, 59);
    const result = isDLS(date);
    expect(result).toBe(false);
  });
  it("3/26/2021 2:00 should retern True becuse after 2 lest Friday", () => {
    const date = new Date(2021, 2, 26, 2, 0);
    const result = isDLS(date);
    expect(result).toBe(true);
  });
  it("9/31/2021 1:59 should return true becuse its befure lest Sunday", () => {
    const date = new Date(2021, 8, 31, 1, 59);
    const result = isDLS(date);
    expect(result).toBe(true);
  });
  it("10/31/2021 1:59 should return true becuse its befure 2 on lest Sunday", () => {
    const date = new Date(2021, 9, 31, 1, 59);
    const result = isDLS(date);
    expect(result).toBe(true);
  });
  it("10/31/2021 2:00 should return false becuse its after 2 on lest Sunday", () => {
    const date = new Date(2021, 9, 31, 2, 0);
    const result = isDLS(date);
    expect(result).toBe(false);
  });
  it("11/31/2021 2:00 should return false becuse its after lest Sunday", () => {
    const date = new Date(2021, 10, 31, 2, 0);
    const result = isDLS(date);
    expect(result).toBe(false);
  });
  it("6/31/2021 2:00 should return true becuse between", () => {
    const date = new Date(2021, 5, 31, 2, 0);
    const result = isDLS(date);
    expect(result).toBe(true);
  });

});


describe("timeConverter", () => {
  it("should return a Date That is 7 hours ahead of the input", () => {
    const date = new Date(2021, 9, 31, 1, 0);
    const result = timeConverter(date);
    expect(result.getHours()).toBe(7);
  });
  it("should return a Date That is 6 hours ahead of the input", () => {
    const date = new Date(2021, 9, 31, 2, 0);
    const result = timeConverter(date);
    expect(result.getHours()).toBe(8);
  });
});
