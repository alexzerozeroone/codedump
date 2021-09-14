/*
    weird algorithm™️
*/

/* not recommended to edit */
    estimations = [Math.random() * 3, Math.random() * Math.random() * 1];
/* *********************** */

/* ******************************************* */
/* ******************************************* */

    /* MODULARS */

        // module to use for randomization
        random_module = estimations;

        // use single module
        not_random = false;
        single_module = estimations[estimations.length - 1];

    /* MODULARS */

/* ******************************************* */
/* ******************************************* */

    /* CONFIGURATION */

        // hit number to go over
        hit_number = 15000;

        // how many times the loop shoudl try to find a hit number
        tries = 9000;

        // return after hit_number is found
        cancel = true;

    /* CONFIGURATION */

/* ******************************************* */
/* ******************************************* */

    /* SCREEN */

        // logging for f function
        logging = false;

        // clear screen
        clear = true;

    /* SCREEN */

/* ******************************************* */
/* ******************************************* */

/*
    ****************************************************************
    ****************************************************************
    ****************************************************************
                DON'T CHANGE BELOW THIS COMMENT
    ****************************************************************
    ****************************************************************
    ****************************************************************
*/

var c = 0;

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function f(nr) {
    if (nr / nr) {
        f(f(nr * nr));
        if (logging) console.log(nr);
        c++;
    }

    if (nr * nr / nr) {
        f(nr * nr);
        if (logging) console.log(nr);
        c++;
    }

    if (nr == Infinity) {
        if (logging) console.log("Reached Infinity");
        c++;
    }
}

function finder(array, tries, hit_number) {
    var notfound = 0;

    for (var i = 0; i < tries; i++) {
        if (clear) console.clear();
        if (random_module) { test_number = random(array); } else {  }

        var t0 = performance.now();

        f(test_number);

        var t1 = performance.now();
        if (c >= hit_number) {
            console.log(`***\t\t\t\t\t\t\t\t\t\t\t\t\t\t***\n\tHit number found, information:`);
            console.log(`\n\tCode took ${t1 - t0}ms to run, function ran ${c} times, original integer was ${test_number}\n`);
            console.log(`***\t\t\t\t\t\t\t\t\t\t\t\t\t\t***`)
            if (cancel) return;
        } else {
            notfound++;
        }

        c = 0;
    }

    if (notfound == tries) {
        if (clear) console.clear();
        console.log(`***\t\t\t\t***\n\tNo result found\n***\t\t\t\t***`)
    }
}

finder(random_module, tries, hit_number)
