// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isUnder25 = n1 <= 25 || n2 <= 25 || n3 <= 25 || n4 <= 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isUnder25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && isUnder25 && isUnique;

// Finally, log the results.
// console.log(isValid);

// Created array of all numbers
const nums = [n1, n2, n3, n4];

// Check if all numbers are divisible by 5. Cache the result in a variable.
let isMult5 = true;
nums.forEach(num => num % 5 === 0 ? null : isMult5 = false);
console.log(`All nums are multiples of 5: ${isMult5}`)

// Check if the first number is larger than the last. Cache the result in a variable.
const firstGreater = nums[0] > nums[3];
console.log(`num1 is greater than num4: ${firstGreater}`)

// Subtract the first number from the second number.
let chainResult = nums[1] - nums[0];
console.log(`num2 minus num1: ${chainResult}`)

// Multiply the result by the third number.
chainResult *= nums[2];
console.log(`Above result times num3: ${chainResult}`)

// Find the remainder of dividing the result by the fourth number.
chainResult %= nums[3];
console.log(`Remainder of num4 divided by above result: ${chainResult}`)


// total distance 1500mi
// 55 mph = 30mpg
// 60 mph = 28mpg
// 75 mph = 23mpg
// budget = $175
// cost = $3/gal


function tripCalc(s) {
	if (s !== 55 && s !== 60 && s !== 75) {
		console.log("Invalid speed input.")
		return
	}
	
	const mpg = 
	s === 55 ? 30 
	: s === 60 ? 28
	: s === 75 ? 23
	: null

	const fuelReq = 1500 / mpg;
	const cost = fuelReq * 3;
	const time = 1500 / s;
	
	console.log(`Your trip will consume ${fuelReq} gallons of gas. This will cost $${cost} ${cost > 175 ? "(Over Budget!)" : ""}. The drive will take about ${time} hours.`)

}

tripCalc(55)
tripCalc(60)
tripCalc(75)