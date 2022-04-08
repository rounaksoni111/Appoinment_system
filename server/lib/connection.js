const MySQL = require('mysql');
const Importer = require('mysql-import');

const { DbOptions } = require('./config');

const connectionPool = MySQL.createPool(DbOptions);
const importer = new Importer({
  host: DbOptions.host,
  user: DbOptions.user,
  password: DbOptions.password,
  port: DbOptions.port,
  database: DbOptions.database
});

const getConnection = async function (done) {
  try {
    connectionPool.getConnection(done);
  } catch (ex) {
    console.log('ex........', ex);
    throw ex;
  }
};

importer.onProgress((progress) => {
  const percent = Math.floor((progress.bytes_processed / progress.total_bytes) * 10000) / 100;
  console.log(`${percent}% Completed`);
});

const importMysqlFile = async function ({ path, database }) {
  try {
    importer.use(database);
    await importer.import(path);
    const files_imported = importer.getImported();
    console.log(`${files_imported.length} SQL file(s) imported.`);
  } catch (ex) {
    console.log('ex........', ex);
    throw ex;
  }
};

module.exports = {
  getConnection,
  importMysqlFile
};
