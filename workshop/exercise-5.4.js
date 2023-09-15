function exercise5_4() {
    // Exercise 5.4
    //
    // Write a loop that will print to the console
    // all of the EVEN numbers from 36 to 0.
    //
    // Write code between the lines (below)
    // -----------------------------------------------------------------
    for (let number = 37; number > -1; number--) {
        if (number % 2 === 0) {
            console.log(number);
        }
    }   
    // -----------------------------------------------------------------
    // Write code between the lines (above)
    //
    //
    //
    //
    //
    //
}

exercise5_4();

// Once you are done type the following in the terminal to test your answer(s).
// yarn test exercise-5.4

module.exports = exercise5_4;
