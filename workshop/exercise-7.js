function exercise7() {
    // Exercise 7
    //
    // Write a program that will output the sum of all of the multiples of four
    // between 0 and 5000
    //
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------
var sum = 0
    for ( i = 0; i < 5001; i++){
        if (i % 4 === 0) {
            sum += i;
        }
    }
    console.log(`The sum is ${sum}`);
    // -----------------------------------------------------------------
    // Write code between the lines (above)
    //
    //
    //
    //
    //
    //
}

exercise7();

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-7

module.exports = exercise7;
