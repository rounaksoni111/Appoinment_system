const fs = require('fs');
const path = require('path');
const isEmpty = require('./isEmpty');

const getDownloadFile = (req, res, next) => {
  try {
    const fileName = req.query.path.toString().split('/').pop();
    const pathName = path.join(__dirname, '..', `/files/${req.query.path}`);
    let file = '';
// console.log(fileName, pathName)
    if (!isEmpty(fileName) && fs.existsSync(pathName)) {
      file = pathName;
    } else {
      file = path.join(__dirname, '..', '/files/fileNotAvailabe.png');
    }

    res.download(file); // Set disposition and send it.
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = getDownloadFile;
