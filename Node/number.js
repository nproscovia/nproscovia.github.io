const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let sum = 0;
const readNum = () => {
    readline.question('Enter a number or "stop" to quit: ', res => {
            if (res.toLowerCase() === "stop") {
                console.log(`SUM: ${sum}`);
                readline.close();
            } else {
                sum += parseInt(res);
                readNum();
            }
        }
    )
}
readNum();