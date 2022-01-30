import { expect } from "chai";
import { spaceCount, tokenize, truncate } from "../src/tokenizer";

const noPunctuation = "Twoja stara pierze w rzece a twój stary czary mary";
const dotEnd = "Twoja stara pierze w rzece a twój stary czary mary.";
const twoDots = "Twoja stara pierze w rzece. Twój stary czary mary.";
const comma = "Twoja stara pierze w rzece, twój stary czary mary.";
const quote = 'Twoja stara "pierze w rzece a twój stary" czary mary';

describe("tokenizer test", () => {
  it("str length equals tokenized length", () => {
    const expected = noPunctuation.length;

    const tokenized = tokenize(noPunctuation);

    const result =
      tokenized.map((x) => x.len).reduce((x, y) => x + y) +
      spaceCount(noPunctuation);

    expect(result).equal(expected);
  });
  it("get tokens from string", () => {
    const result = "Twoja stara pierze";
  });
  it("truncate length", () => {
    const resultLengthGreaterThanStrLen = truncate(noPunctuation, 40);

    const expectedLenghtGreaterThanStrLen = noPunctuation.length;

    expect(resultLengthGreaterThanStrLen.length).equal(
      expectedLenghtGreaterThanStrLen
    );
  });
  it("truncate maxLen", () => {
    const resultMaxLenEqualStrLen = truncate(noPunctuation, 10, {
      maxLen: noPunctuation.length,
    });
    const expectedLengthEqualStrLen = noPunctuation.length;

    expect(resultMaxLenEqualStrLen.length).equal(expectedLengthEqualStrLen);
  });
});
