const fs = require('fs');

function readFileByName(fileName) {
  if (fs.existsSync(`files/${fileName}.txt`)) {
    const array = fs.readFileSync(`files/${fileName}.txt`, err => {
      if (err) throw err;
    }).toString().split(',').map(Number);

    console.log(`File content: ${array}\n`);
  } else {
    console.log('File with specified name does not exist.\n');
  }
}

module.exports = { readFileByName };