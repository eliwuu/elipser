import { expect } from "chai";
import { Elipser } from "../src/elipser";

const elipsisLength = 6;
const elipsis = " (...)";
describe("shortener", () => {
  it("request 20 chars, get 25", () => {
    const str = "abcd abcd abcd abcd ";
    const result = new Elipser(str, 20).Get;

    const expectedStr = "abcd abcd abcd abcd" + elipsis;
    const expectedLen = 19 + elipsisLength;

    expect(result.length).equal(expectedLen);
    expect(result).equal(expectedStr);
  });
  it("request 16 chars, get 25", () => {
    const str = 'abcd abcd abcd "abcd" ';
    const result = new Elipser(str, 16).Get;

    const expectedStr = 'abcd abcd abcd "abcd"' + elipsis;
    const expectedLen = 21 + elipsisLength;

    expect(result.length).equal(expectedLen);
    expect(result).equal(expectedStr);
  });
});
