const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const port = process.env.port || 7788;


app.use('/', express.static('./public/test'));



app.listen(port, '0.0.0.0', function (err){
    if (err){
        console.log(err);
    } else {
        console.log(`app is listening to port ${port}`);
    }
});


