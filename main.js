function isEvenlyDivisible(num, num1){
  if(num % num1 === 0){
    return true;
  } else {
    return false;
  }
}

function halfSquare(num){
  return (num * num) / 2;
}

function isLong(str){
  if (str.length >= 15) {
    return true;
  } else {
    return false;
  }
}

function exclaim(str) {

  if(str.indexOf('!') === -1){
    return  str +'!'
    }
    if(str.indexOf('!') === str.length-1){
      return str
    }
  else{
    return str.slice(0,str.indexOf('!')+1);
    }
  }


function countWords(str) {
  let count = 1;
  for (i = 0; i < str.length; i++){
    if(str[i] === ' '){
      count += 1;
    }
  }
  return count;
}

function containsDigit(str) {
  if (str === "") {
    return false;
  }
  const numbers = "1234567890";
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (str[i] === numbers[j]) {
        return true;
      }
    }
  }
  return false;
}


function containsLowerCase(str) {
	lowerCase = 0;
	for (i = 0; i < str.length; i++) {
		if (
			str[i] === "a" ||
			str[i] === "b" ||
			str[i] === "c" ||
			str[i] === "d" ||
			str[i] === "e" ||
			str[i] === "f" ||
			str[i] === "g" ||
			str[i] === "h" ||
			str[i] === "i" ||
			str[i] === "j" ||
			str[i] === "k" ||
			str[i] === "l" ||
			str[i] === "m" ||
			str[i] === "n" ||
			str[i] === "o" ||
			str[i] === "p" ||
			str[i] === "q" ||
			str[i] === "r" ||
			str[i] === "s" ||
			str[i] === "t" ||
			str[i] === "u" ||
			str[i] === "v" ||
			str[i] === "w" ||
			str[i] === "x" ||
			str[i] === "y" ||
			str[i] === "z"
		) {
			lowerCase += 1;
		}
	}
	if (lowerCase < 1) {
		return false;
	} else {
		return true;
	}
}

function containsUpperCase(str) {
	upperCase = 0;
	for (i = 0; i < str.length; i++) {
		if (
			str[i] === "A" ||
			str[i] === "B" ||
			str[i] === "C" ||
			str[i] === "D" ||
			str[i] === "E" ||
			str[i] === "F" ||
			str[i] === "G" ||
			str[i] === "H" ||
			str[i] === "I" ||
			str[i] === "J" ||
			str[i] === "K" ||
			str[i] === "L" ||
			str[i] === "M" ||
			str[i] === "N" ||
			str[i] === "O" ||
			str[i] === "P" ||
			str[i] === "Q" ||
			str[i] === "R" ||
			str[i] === "S" ||
			str[i] === "T" ||
			str[i] === "U" ||
			str[i] === "V" ||
			str[i] === "W" ||
			str[i] === "X" ||
			str[i] === "Y" ||
			str[i] === "Z"
		) {
			upperCase += 1;
		}
	}
	if (upperCase < 1) {
		return false;
	} else {
		return true;
	}
}

function containsNonAlphanumeric(str) {
	nonNumbers = 0;
	for (i = 0; i < str.length; i++) {
		if (
			str[i] === " " ||
			str[i] === "?" ||
			str[i] === "#" ||
			str[i] === "$" ||
			str[i] === "%" ||
			str[i] === "^" ||
			str[i] === "&" ||
			str[i] === "@" ||
			str[i] === "*" ||
			str[i] === "(" ||
			str[i] === ")" ||
			str[i] === "!"
		) {
			nonNumbers += 1;
		}
	}
	if (nonNumbers < 1) {
		return false;
	} else {
		return true;
	}
}

function containsSpace(str) {
	space = 0;
	for (i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			space += 1;
		}
	}
	if (space < 1) {
		return false;
	} else {
		return true;
	}
}

function digits(num) {
  let arr = []
  if (num < 0){
    num = num * (-1)
  }
  let str = num.toString()
  for (const digit of str){
    if (digit !=='.'){
    arr.push(parseInt(digit));
  } else {
    continue;
  }
}
  return arr;
}

function truncate(str) {
  let newStr= ''
  if (str.length >= 15){
    for (let i = 0; i < 8; i++){
      newStr += str[i]
    }
    newStr = newStr + '...'
  }else{
    for (let i = 0; i < str.length; i++){
      newStr += str[i]
    }
  }
  return newStr
}

function isValidPassword(str) {
  let status = false;

  if (containsDigit(str) && str !== str.toLowerCase() && str !== str.toUpperCase() && containsNonAlphanumeric(str) && !containsSpace(str)){
    status = true;
  }
  return status;
}

function onlyPunchy(arr) {
	newArr = [];
	for (title of arr) {
		if (exclaim(title).length < 15) {
			newArr.push(exclaim(title));
		}
	}
	return newArr
}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}