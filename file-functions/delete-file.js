const fs = require('fs');

function deleteFile(fileName) {
  if (fs.existsSync(`files/${fileName}.txt`)) {
    fs.unlinkSync(`files/${fileName}.txt`, err => {
      if (err) throw err;
    });

    console.log('The file has been deleted.\n');
  } else {
    console.log('File with specified name does not exist.\n');
  }
}

module.exports = { deleteFile };

