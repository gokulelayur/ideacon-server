const express = require('express');

const app = express();

// index route
app.get('/', (req, res) => {
    res.send('Index1');
} );


const port = 5000;

app.listen(port, () => {
    console.log(`server started on  ${port}`);
});