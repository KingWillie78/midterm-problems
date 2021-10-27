function isEvenlyDivisible(a, b) {
	if (a % b === 0) {
		return true;
	}
	return false;
}

function halfSquare(num) {
	return (num * num) / 2;
}

function isLong(str) {
	if(str.length >= 15){
	  return true;
	}
	else {
	  return false;
	}
  }

function exclaim(str) {
    console.log(str);
    for (let char = 0; char < str.length; char++) {
        console.log(str.length);
        const point = str[char];
        console.log(point);
        while (point[char] !== '!'); {

        }
    }
}

function countWords(str) {
	const arr =  str.split(" ");
	return arr.length;
}

function containsDigit(string) {
	let newString = [];
	newString = string.split("");
	if (string === ""){
		return false;
	}
	for (let i = 0; i < newString.length; i++) {
		if (!isNaN(parseInt(newString[i]))) {
			return true;
		}
	}
	return false;
}

function containsLowerCase(str) {
    if (str.toUpperCase !== str) {
        return false;
    } else { return true; }
}

function containsUpperCase(str) {
    if (str.toUpperCase === str) {
        return true;
    } else { return false; }
}

function containsNonAlphanumeric(str) {
    if (containsDigit(str) || containsLowerCase(str) || containsUpperCase(str) === true) {
        return false;
    } else { return true; }
}

function containsSpace(str) {
	numSpaces = 0;
	for (i = 0; i < str.length; i++) {
		if (str[i] === " ") {
			numSpaces += 1;
		}
	}
	if (numSpaces < 1) {
		return false;
	} else {
		return true;
	}
}

function digits(num) {
	let arr = [];
	const str = num.toString();
	for(const n of str){
		let temp = Number(n);
		if(!isNaN(temp)){
			arr.push(temp)
		}
	}
	return arr
}

function truncate(string) {
	if (string.length <= 8) {
		return string;
	}
	return string.slice(0, 8) + "...";
}

function isValidPassword(passMe) {
    if (containsDigit === false) {
        return console.log('Invalid Password');
    }
    if (containsLowerCase === false) {
        return console.log('Invalid Password');
    }
    if (containsNonAlphanumeric === false) {
        return console.log('Invalid Password');
    }
    if (containsUpperCase) {
        return console.log('Invalid Password');
    } else {
        return true;
    }
}

function onlyPunchy(arr) {
	newArr = [];
	for (title of arr) {
		if (exclaim(title).length < 15) {
			newArr.push(exclaim(title));
		}
	}
	return newArr;
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