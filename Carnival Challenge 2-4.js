// Challenge #2
// Organize Destinations alphabetically
// I was having troubles selecting the tiles, below I sorted them alphabetically.
// To fully solve this challenge I would:
// Use JQuery selectors to grab the children of the tile list, and sort/organize their names
// Then insert that to the page
function alphabetSort(){
    const tilesArr = ["Caribbean", "The Bahamans", "Mexico", "Europe", "Bermuda", "Alaska", "Canada & New England", "Hawaii", "Panama Canal", "Transatlantic", "Transpacific", "Australia"];
    tilesArr.sort()
    console.log(tilesArr);
}
alphabetSort();

// Challenge #3
// Replacing HREF Values of buttons through the console.
// Below is my answer, although if I were to do this again I would give the buttons IDs and use that to select the buttons instead.

// Selecting the buttons through their common href label, and updating the href attr to each button

// Commented out so challenge #2 and #3 can be tested <<====
// for(i = 0; i < 4; i++){
//     $("[href='javascript:;']").attr('href','https://www.carnival.com?test=' + i);
// }

// Challenge #4
function lineCount(num){
    //Array with line count value, in respect to number
    const valueArray = [6,2,5,5,4,5,6,4,7,8];
    //Turn given integer to a string
    const newNum = num.toString();
    //Split string per character, giving us an array of single digits
    const numArray = newNum.split('');
    console.log('The numArray is: ' + numArray);

    //Array to hold values of integers after check
    const lineValueArr = [];

    //Checks number with valueArray to find line value of number
    for (i=0; i<numArray.length; i++){
        lineValueArr.push(valueArray[numArray[i]]);
    }

    // Sums up the lineValueArr values to give us the final result
    const sum = lineValueArr.reduce(add, 0); 
        function add(accumulator, a) {
        return accumulator + a;
    }

    // Console.log the result
    console.log('The Line Count of the number ' + num +' is equal to: ' + sum);
}
lineCount(0);
lineCount(410);
lineCount(74511);
