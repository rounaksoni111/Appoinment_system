
const express = require('express');
const path = require('path');
const http = require('http');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');


// imports
const { env, ServerPort } = require('./lib/config');
const { runInNewContext } = require('vm');

const app = express();

app.use(bodyParser.json({ limit: '15360mb', type: 'application/json' }))
app.use(bodyParser.urlencoded({ limit: '15360mb', extended: true, type: 'application/json', parameterLimit: 5000000 }))

app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// Point static path to dist
// -------------------------------
if (env === 'dev' || env === 'uat' || env === 'prod') {
    app.use('/', express.static(path.join(__dirname, 'dist')));
    app.use('/dist', express.static(path.join(__dirname, 'dist')));
} else if (env === 'test') {
    app.use('/', express.static(path.join(__dirname, '..', 'dist')));
    app.use('/dist', express.static(path.join(__dirname, '..', 'dist')));
} else {
    app.use('/', express.static(path.join(__dirname, '..', 'src')));
    app.use('/src', express.static(path.join(__dirname, '..', 'src')));
}
  

app.use("/api/v1/user", require("./routes/user"));


app.use("/upload", require("./routes/upload"));
// app.use("/upload",(req,res,next)=>{
//     tokenValidate();
//     next();
// },
// (req,res,next)=>{
//     next();
// },
// (req,res,next)=>{
//     next();
// },
// (req,res,next)=>{
//     next();
// },
// (req,res,next)=>{
//     next();
// },
// );

app.use('/', require('./routes'));


const server = http.createServer(app);
server.listen(ServerPort, async () => {
  console.log('server is running on port: ', ServerPort);
});