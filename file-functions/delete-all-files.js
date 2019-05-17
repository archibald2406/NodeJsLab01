const fs = require('fs');
const path = require('path');

function deleteAllFiles() {
  const files = fs.readdirSync('./files', err => {
    if (err) throw err;
  });

  if (files.length) {
    for (const file of files) {
      fs.unlinkSync(path.join('./files', file), err => {
        if (err) throw err;
      });
    }

    console.log(`All files in directory './files' has been removed.\n`);
  } else {
    console.log(`Directory './files' is empty. No files to delete.\n`);
  }
}

module.exports = { deleteAllFiles };