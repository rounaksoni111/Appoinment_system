const { getConnection } = require('./connection');
const { DbOptions } = require('./config');

module.exports = ({ Query, Values = [] }) =>
  new Promise((resolve, reject) => {
    const database = DbOptions.database;
    // console.log('DbName: ', database);
    if(Query !== '') {
      getConnection((error, connection) => {
        if (error) {
          console.log('MysqlQueryRunner connection error: ', error);
          throw error;
        }

        connection.changeUser({ database: database });
        if (Values.length === 0) {
          connection.query(Query, (error, result, fields) => {
            if (error) {
              console.log(error);
              reject(error);
            }
            resolve({ error, result, fields });
          });
        } else if (Values.length > 0) {
          connection.query(Query, Values, (error, result, fields) => {
            if (error) {
              console.log(error);
              reject(error);
            }
            resolve({ error, result, fields });
          });
        }
        connection.release();
        console.log('Process Complete %d', connection.threadId);
      });
    }
  });
