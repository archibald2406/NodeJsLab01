const readline = require('readline');

const {createArrayAndWriteToFile} = require('./file-functions/create-and-fill-file');
const {sortArrayFromFile} = require('./file-functions/sort-array-from-file');
const {readFileByName} = require('./file-functions/read-file-content');
const {deleteFile} = require('./file-functions/delete-file');
const {deleteAllFiles} = require('./file-functions/delete-all-files');

const readln = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const menu = `Select an action:
1) Create and fill the file with an array of random numbers.
2) Read file.
3) Sort array from file.
4) Delete file.
5) Delete all files.
6) Exit.\n`;

showMainMenu();

function showMainMenu() {
  readln.question(menu, answer => {
    switch (answer) {
      case '1': task1(); break;
      case '2': task2(); break;
      case '3': task3(); break;
      case '4': task4(); break;
      case '5': task5(); break;
      case '6': console.log('See you later...'); process.exit(); break;
      default: console.log('\nPlease, enter number from 1 to 6\n'); showMainMenu();
    }
  });
}

function task1() {
  readln.question('Input number: ', answer => {
    if (answer.match(/^[1-9]+[0-9]*$/)) {
      createArrayAndWriteToFile(parseInt(answer));
      showMainMenu();
    } else {
      console.log('Wrong data entered. Enter an integer greater than 0.\n');
      showMainMenu();
    }
  });
}

function task2() {
  readln.question('Input file name: ', answer => {
    readFileByName(answer);
    showMainMenu();
  });
}

function task3() {
  const question1 = 'Input file name: ';

  const question2 = `Select sort type:
  1) Default JavaScript sort method
  2) Quick sort
  3) Shell sort\n`;

  readln.question(question1, answer1 => {
    readln.question(question2, answer2 => {
      sortArrayFromFile(answer1, answer2);
      showMainMenu();
    });
  });
}

function task4() {
  readln.question('Input file name: ', answer => {
    deleteFile(answer);
    showMainMenu();
  });
}

function task5() {
  deleteAllFiles();
  showMainMenu();
}