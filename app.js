const express = require('express');
const path = require('path');
const port = 3000 || process.env.port

const app = express();
app.use('/static', express.static(path.join(__dirname, '/static')));
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, '/static/index.html'));
});
app.listen(port, ()=> console.log('Server started...'));