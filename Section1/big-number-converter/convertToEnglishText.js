function convertToEnglishText(num) {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  const teens = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];

  const numString = num.toString();

  if (num === 0) {
    return "Zero";
  }

  if (num < 0 || num > 999999) {
    throw new Error("Number out of range");
  }

  let text = "";

  if (num >= 1000) {
    text += convertToEnglishText(Math.floor(num / 1000)) + " Thousand ";
    num %= 1000;
  }

  if (num >= 100) {
    text += ones[Math.floor(num / 100)] + " Hundred ";
    num %= 100;
  }

  if (num >= 10 && num <= 19) {
    text += teens[num - 10] + " ";
    num = 0;
  } else if (num >= 20 || num === 0) {
    text += tens[Math.floor(num / 10)] + " ";
    num %= 10;
  }

  if (num >= 1 && num <= 9) {
    text += ones[num] + " ";
  }

  return text.trim();
}

module.exports = convertToEnglishText;
