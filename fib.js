const express = require('express');
const fib = require('bindings')('fib');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/num', (req, res) => {
    const num = fib.Get();
    res.status(200).send(num.toString());
})

app.listen(3000, () => {
    console.log("Server started...");
})




// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'
// console.log(addon.Get()); // 'world'