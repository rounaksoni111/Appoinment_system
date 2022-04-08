const env = 'local';
console.log('env...', env);

let DbOptions = {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'appoiment_system'
};

let DomainName = 'localhost:5000';
let APIURL = 'http://localhost:5000';
let ServerPort = 5000;

let MailOptions = {
    username: '',
    password: '',
    service: 'GMAIL'
};


  

// if (env === 'prod') {
// } else if (env === 'dev') {
// } else if (env === 'uat') {
// } else if (env === 'test') {
// } else {
//   DbOptions = {
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     port: 3306,
//     database: 'ndis'
//   };
//   DomainName = 'localhost:5000';
//   APIURL = 'http://localhost:5000';
//   ServerPort = 5000;
//   MailOptions = {
//     username: '',
//     password: '',
//     service: 'GMAIL'
//   };
// }


module.exports = { env, DbOptions, DomainName, APIURL, ServerPort, MailOptions };
