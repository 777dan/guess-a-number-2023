function play() {
    const minRange = Math.floor(Math.random() * 100);
    const maxRange = minRange + Math.floor(Math.random() * (100 - minRange));
    const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
    while (true) {
        let n = +prompt(`Input a number from ${minRange} to ${maxRange}`);
        if (isNaN(n)) {
            alert("Game over!");
            break;
        } else {
            if (n === randomNumber) {
                alert("You win!");
                break;
            }
            if (n > randomNumber) {
                alert("Too much");
                continue;
            }
            if (n < randomNumber) {
                alert("Too few");
                continue;
            }
        }
    }
}