module.exports = function toReadable (number) {
  const NUMBERS = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
  };

  let message=[];
  let strNumber = String(number);
  let strNumberLength = strNumber.length;

  if (strNumberLength === 1) {
    message.push(NUMBERS[number]);
    return message.join(" ");
  }

  if (strNumberLength === 2&&number<20) {
    message.push(NUMBERS[number]);
    return message.join(" ");
  }

  if (strNumberLength === 2&&number<100) {
    if(number%10 == 0) {
      message.push((NUMBERS[(Math.floor(number / 10)) * 10]));
      return message.join(" ");
    }
    else {
      message.push(NUMBERS[(Math.floor(number / 10)) * 10], NUMBERS[number%10]);
    }
    return message.join(" ");
  }
  if (strNumberLength === 3&&number < 1000) {
    if (number%100 < 10) {
      if (number%100 == 0) {
        message.push(NUMBERS[(Math.floor(number / 100))], NUMBERS[100]);
        return message.join(" ");
      } else {
        message.push(NUMBERS[(Math.floor(number / 100))], NUMBERS[100], NUMBERS[number%100]);
      }
      return message.join(" ");
    }
    if ((number%100) < 20) {
      message.push(NUMBERS[(Math.floor(number / 100))], NUMBERS[100], NUMBERS[number%100])
      return message.join(" ");
    }
    if (20<(number%100) < 100) {
      if (number%10 == 0) {
        message.push(NUMBERS[(Math.floor(number / 100))], NUMBERS[100], NUMBERS[(Math.floor((number%100) / 10)) * 10]);
        return message.join(" ");
      } 
      else {
        message.push(NUMBERS[(Math.floor(number / 100))], NUMBERS[100], NUMBERS[(Math.floor((number%100) / 10 )) * 10], NUMBERS[number%10]);
      }
      return message.join(" ");
    }
  }
}
