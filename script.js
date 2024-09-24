//Chapters-38 to 42
//FUNCTIONS, SWITCH STATEMENTS, WHILE... DO- WHILE LOOPS

//Question 1:
function power(a, b) {
    return Math.pow(a, b); // You can also use the ** operator: a ** b
}

// Example usage:
console.log("Q1a) " + power(2, 3));  
console.log("Q1b) " + power(5, 2));  


//Question 2:
function isLeapYear(year) {
    switch (true) {
        // If year is divisible by 400, it's a leap year
        case (year % 400 === 0):
            return true;

        // If year is divisible by 100 but not by 400, it's not a leap year
        case (year % 100 === 0):
            return false;

        // If year is divisible by 4 but not by 100, it's a leap year
        case (year % 4 === 0):
            return true;

        // For all other cases, it's not a leap year
        default:
            return false;
    }
}

// Example usage:
var year = 2024; // You can replace this with any year input
console.log("Q2) " + isLeapYear(year));  // Outputs true for 2024 (leap year)


//Question 3:
// Function to calculate semi-perimeter (S)
function calculateSemiPerimeter(a, b, c) {
    return (a + b + c) / 2;
}

// Function to calculate the area of the triangle
function calculateArea(a, b, c) {
    var S = calculateSemiPerimeter(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

// Example usage:
var a = 3, b = 4, c = 5;
console.log("Q3a) Semi-perimeter (S):", calculateSemiPerimeter(a, b, c));  
console.log("Q3b) Area of triangle:", calculateArea(a, b, c));  


//Question 4:
// Function to calculate average of marks
function calculateAverage(marks) {
    var total = marks.reduce((acc, mark) => acc + mark, 0);
    return total / marks.length;
}

// Function to calculate percentage based on total marks and maximum marks
function calculatePercentage(marks, maxMarks) {
    var total = marks.reduce((acc, mark) => acc + mark, 0);
    return (total / (marks.length * maxMarks)) * 100;
}

// Main function to call the other two functions and display results
function mainFunction() {
    var marks = [85, 90, 78];  // Example marks received in 3 subjects
    var maxMarks = 100;      // Assuming each subject is out of 100 marks

    var average = calculateAverage(marks); // Calculate average
    var percentage = calculatePercentage(marks, maxMarks); // Calculate percentage

    // Display the results
    console.log(`Q4a) Average Marks: ${average}`);
    console.log(`Q4b) Percentage: ${percentage}%`);
}

// Call the main function
mainFunction();



//Question 5:
function customIndexOf(str, char) {
    var index = 0;

    // Using a while loop to search for the character
    while (index < str.length) {
        if (str[index] === char) {
            return index; // Return the index if the character is found
        }
        index++;
    }

    return -1; // Return -1 if the character is not found
}

// Example usage
console.log(customIndexOf("Q5a) hello", "l"));  // Outputs 2
console.log(customIndexOf("Q5b) hello", "z"));



//Question 6:
// Function to devare all vowels from a sentence
function removeVowels(sentence) {
    // Define vowels to remove
    var vowels = 'aeiouAEIOU';
    var result = '';

    var i = 0;
    // Process each character in the sentence
    while (i < sentence.length) {
        // If the character is not a vowel, add it to the result
        if (!vowels.includes(sentence[i])) {
            result += sentence[i];
        }
        i++;
    }

    return result;
}

// Example usage:
var sentence = "This is an example sentence.";
var sentenceWithoutVowels = removeVowels(sentence);

console.log(`Q6a) Original Sentence: "${sentence}"`);
console.log(`Q6b) Sentence without vowels: "${sentenceWithoutVowels}"`);


//Question 7:
function countVowelPairsDoWhile(str) {
    var vowels = "aeiouAEIOU";  // String containing all vowels
    var count = 0;
    var i = 0;

    // Using a do...while loop to traverse through the string
    do {
        var pair = str[i] + str[i + 1];  // Get the current and next character

        // Switch to check if the current pair of characters are vowels
        switch (true) {
            case (vowels.includes(str[i]) && vowels.includes(str[i + 1])):
                count++;  // Increment count if both are vowels
                break;
        }

        i++;  // Move to the next character in the string
    } while (i < str.length - 1);

    return count;
}

// Example usage
var sentence = "Pleases read this application and give me gratuity";
console.log("Q7)" + countVowelPairsDoWhile(sentence)); 



//Question 8:
// Function to convert kilometers to meters
function convertToMeters(km) {
    return km * 1000;  // 1 km = 1000 meters
}

// Function to convert kilometers to feet
function convertToFeet(km) {
    return km * 3280.84;  // 1 km = 3280.84 feet
}

// Function to convert kilometers to inches
function convertToInches(km) {
    return km * 39370.1;  // 1 km = 39370.1 inches
}

// Function to convert kilometers to centimeters
function convertToCentimeters(km) {
    return km * 100000;  // 1 km = 100000 centimeters
}

// Main function to input the distance and call the conversion functions
function mainFunction() {
    // Input the distance in kilometers
    var distanceInKm = parseFloat(prompt("Q8) Enter the distance between two cities (in kilometers):"));

    // Calling the conversion functions and displaying the results
    console.log(`Q8a) Distance in meters: ${convertToMeters(distanceInKm)} meters`);
    console.log(`Q8b) Distance in feet: ${convertToFeet(distanceInKm)} feet`);
    console.log(`Q8c) Distance in inches: ${convertToInches(distanceInKm)} inches`);
    console.log(`Q8d) Distance in centimeters: ${convertToCentimeters(distanceInKm)} cm`);
}

// Call the main function
mainFunction();


//Question 9:
// Function to calculate overtime pay
function calculateOvertimePay(hoursWorked) {
    var regularHours = 40;
    var overtimeRate = 12.00;
    var overtimeHours = 0;
    var overtimePay = 0;

    // Use switch statement to calculate overtime pay
    switch (true) {
        case (hoursWorked > regularHours):
            overtimeHours = hoursWorked - regularHours; // Calculate overtime hours
            overtimePay = overtimeHours * overtimeRate; // Calculate overtime pay
            break;

        default:
            overtimePay = 0; // No overtime if worked hours are less than or equal to 40
            break;
    }

    return overtimePay;
}

// Main function to input hours worked and calculate overtime pay
function mainFunction() {
    // Input the number of hours worked
    var hoursWorked = parseInt(prompt("Q9) Enter the number of hours worked:"));

    // Call the overtime pay function
    var overtimePay = calculateOvertimePay(hoursWorked);

    // Display the overtime pay
    console.log(`Q9) Overtime Pay: Rs. ${overtimePay.toFixed(2)}`);
}

// Call the main function
mainFunction();


//Question 10:
// Function to calculate the number of currency notes for each denomination
function calculateCurrencyNotes(amount) {
    var hundreds = 0, fifties = 0, tens = 0;

    // First, calculate the number of 100-rupee notes
    hundreds = Math.floor(amount / 100);
    amount = amount % 100; // Remaining amount after hundreds are taken out

    // Next, calculate the number of 50-rupee notes
    fifties = Math.floor(amount / 50);
    amount = amount % 50; // Remaining amount after fifties are taken out

    // Finally, calculate the number of 10-rupee notes
    tens = Math.floor(amount / 10);

    // Return an object with the number of notes for each denomination
    return {
        hundreds: hundreds,
        fifties: fifties,
        tens: tens
    };
}

// Main function to input the amount and display the number of notes
function mainFunction() {
    // Input the amount to be withdrawn (in multiples of 10)
    var amount = parseInt(prompt("Q10) Enter the amount to withdraw (in multiples of 10):"));

    // Call the function to calculate the number of currency notes
    var notes = calculateCurrencyNotes(amount);

    // Display the results
    console.log(`Q10a) 100-Rupee Notes: ${notes.hundreds}`);
    console.log(`Q10b) 50-Rupee Notes: ${notes.fifties}`);
    console.log(`Q10c) -Rupee Notes: ${notes.tens}`);
}

// Call the main function
mainFunction();