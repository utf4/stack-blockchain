const convertToEnglishText = require("./convertToEnglishText");

describe("convertToEnglishText", () => {
  test("converts 0", () => {
    expect(convertToEnglishText(0)).toBe("Zero");
  });

  test("converts single-digit numbers", () => {
    expect(convertToEnglishText(1)).toBe("One");
    expect(convertToEnglishText(5)).toBe("Five");
    expect(convertToEnglishText(9)).toBe("Nine");
  });

  test("converts numbers up to 99", () => {
    expect(convertToEnglishText(10)).toBe("Ten");
    expect(convertToEnglishText(25)).toBe("Twenty Five");
    expect(convertToEnglishText(77)).toBe("Seventy Seven");
  });

  test("converts numbers up to 999", () => {
    expect(convertToEnglishText(100)).toBe("One Hundred");
    expect(convertToEnglishText(525)).toBe("Five Hundred Twenty Five");
    expect(convertToEnglishText(999)).toBe("Nine Hundred Ninety Nine");
  });

  test("converts numbers up to 999,999", () => {
    expect(convertToEnglishText(1000)).toBe("One Thousand");
    expect(convertToEnglishText(12345)).toBe(
      "Twelve Thousand Three Hundred Forty Five"
    );
    expect(convertToEnglishText(999999)).toBe(
      "Nine Hundred Ninety Nine Thousand Nine Hundred Ninety Nine"
    );
  });

  test("throws an error for numbers outside of range", () => {
    expect(() => convertToEnglishText(-1)).toThrow("Number out of range");
    expect(() => convertToEnglishText(1000000)).toThrow("Number out of range");
  });
});
