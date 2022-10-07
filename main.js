const numCounter = function* () {
    let uniqueID = 0;

    while (true) {
        uniqueID++
        yield uniqueID;
    }
}
const uniqueNumber = numCounter();

for (let i = 0; i < 100; i++) {
    console.log(uniqueNumber.next());
}