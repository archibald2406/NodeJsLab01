const fs = require('fs');
const moment = require('moment');

function createArrayAndWriteToFile(number) {
  const currDate = moment(new Date()).format('DD-MM-YYYY');
  const array = Array.from({length: number}, () => Math.floor(Math.random() * number));

  fs.writeFileSync(`files/1-2-Mikhail ${currDate}.txt`, array, err => {
    if (err) throw err;
  });

  console.log('The file has been created.\n');
}

module.exports = { createArrayAndWriteToFile };