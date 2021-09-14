/*
    weird algorithm that javascript takes time to load
    highest runtime is precise[0]
*/

estimations = [Math.random() * 3, Math.random() * 59]
precise = [1.0067988845291673, 1.1654900800172863, 1.1804955081257766, 0.8884260601220697, 2]
// test_number = random(estimations)
// test_number = random(precise)
test_number = precise[0]

// turn off on slow devices / websites??
logging = true;
// turn off to not log the result at all
full_logging = true;

var c = 0;

function random(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function f(nr) {
    if (nr/nr) {
        f(f(nr*nr))
        logging ? console.log(nr)
        c++;
    }

    if (nr*nr/nr) {
        f(nr*nr)
        logging ? console.log(nr)
        c++;
    }

    if (nr == Infinity) {
        logging ? console.log("Reached infinity");
        c++;
    }
}

var t0 = performance.now()

f(test_number)

var t1 = performance.now()
full_logging ? console.log(`*** Code took ${t1 - t0}ms to run, function ran ${c} times, original integer was ${test_number}***`);
