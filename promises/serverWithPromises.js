const express = require('express');
const app = express();
// const cpuCount = require("os").cpus().length
// console.log(cpuCount);


app.get('/isPrime', async (req, res) => {
    const startTime = new Date();
    const result = await isPrime(parseInt(req.query.number))
    const endTime = new Date()

    res.json({
        number: parseInt(req.query.number),
        isPrime: result,
        time: endTime.getTime() - startTime.getTime() + ' ms',
    })
})

app.get('/getrequest', async (req, res) => {
    res.send('I am unblocked')
})

const isPrime = number => {
    return new Promise(resolve => {
        let isPrime = true;

        for (let i = 3; i < number; i++) {
            if (number % i === 0) {
                isPrime = false
                break
            }
        }
        resolve(isPrime)
    })
}

app.listen(3000, () => { console.log(`App listening on 3000`) })