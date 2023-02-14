const express = require('express')
const app = express();

const dataRouter = require('./Routes/data');

const cors = require('cors')

app.use(cors());

app.get('/home',(req,res)=>{
    res.send('hello');
    console.log('home');
})

app.use('/api',dataRouter)

app.listen(8088, () => {
    console.log('server started');
});