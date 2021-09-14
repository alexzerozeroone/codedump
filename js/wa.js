/*
    weird algorithm that javascript takes time to load
    highest runtime is precise[0]
*/

estimations = [Math.random() * 3, Math.random() * 2]
precise = [1.0067988845291673, 1.1654900800172863, 1.1804955081257766, 0.8884260601220697, 2]
// test_number = random(estimations)
// test_number = random(precise)
// test_number = precise[0]

// turn off on slow devices / websites??
logging = false
// turn off to not log the result at all
full_logging = true
// log finder result while not being the hit number
log_anyways = false
// return after hit_number is found
cancel = true
// how many times the loop shoudl try to find a hit number
tries = 1500
// module to use for randomization
random_module = estimations
// hit number to go over
hit_number = 10000

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
        logging ? console.log(nr) : null;
        c++;
    }

    if (nr * nr / nr) {
        f(nr * nr);
        logging ? console.log(nr) : null;
        c++;
    }

    if (nr == Infinity) {
        logging ? console.log("Reached infinity") : null;
        c++;
    }
}

function finder(array, tries, hit_number = 999999) {
    var notfound = 0;

    for (var i = 0; i < tries; i++) {
        test_number = random(array);
        console.clear();
        var t0 = performance.now();

        f(test_number);

        var t1 = performance.now();
        log_anyways ? console.log(`***\nCode took ${t1 - t0}ms to run, function ran ${c} times, original integer was ${test_number}\n***`) : null;
        r = () => { return }
        if (c >= hit_number) {
            console.log(`***!!!\nHit number found, information:`);
            console.log(`\nCode took ${t1 - t0}ms to run, function ran ${c} times, original integer was ${test_number}\n`);
            console.log("!!!***")
            cancel ? r() : null;
        } else {
            notfound++;
        }

        c = 0;
    }

    if (notfound == tries) {
        console.clear();
        console.log(`***\nNo result found\n***`)
    }
}

finder(random_module, tries, hit_number)
