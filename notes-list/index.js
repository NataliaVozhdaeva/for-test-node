const fs = require('fs');
const { access, F_OK, readFile } = require('fs').promises;
const path = require('path');
const [command, title, content] = process.argv.slice(2);

const filepath = path.join(__dirname, 'notes', 'notes.json');
//const writeFile = fs.writeFile;

/* async function create(title, content) {
  try {
    await access(filepath, F_OK);
  } catch (e) {
    try {
      await writeFile(filepath, '[]');
      console.log('Файл был создан');
      readFile(filepath, (error, data) => {
        if (error) return console.error('30 ' + error.message);
        const notes = JSON.parse(data);
        notes.push({ title, content });
        const json = JSON.stringify(notes);

        fs.writeFile(filepath, json, (error) => {
          if (error) return console.error('34' + error.message);
          console.log('Заметка создана');
        });
      });
    } catch (e) {
      console.log('22 e', e);
    }
  }
} */

function create(title, content) {
  fs.readFile(filepath, (error, data) => {
    if (error) return console.error(error.message);
    const notes = JSON.parse(data);
    notes.push({ title, content });
    const json = JSON.stringify(notes);

    fs.writeFile(filepath, json, (error) => {
      if (error) return console.error(error.message);
      console.log('Заметка создана');
    });
  });
}

switch (command) {
  case 'list':
    list();
    break;
  case 'view':
    view(title);
    break;
  case 'create':
    create(title, content);
    break;
  case 'remove':
    remove(title);
    break;
  default:
    console.log('Неизвестная команда');
}

/* try {
    await access(filepath, fs.F_OK, (err) => {
      if (err) {
        fs.writeFile(path.join(__dirname, 'notes', 'notes.json'), '[]', (err) => {
          if (err) throw err;
          console.log('Файл был создан');
        });
      }
    });

    console.log('can access');
  } finally { */
/*   fs.access(filepath, fs.F_OK, (err) => {
    if (err) {
      fs.writeFile(path.join(__dirname, 'notes', 'notes.json'), '[]', (err) => {
        if (err) throw err;
        console.log('Файл был создан');
      });
    }
  }); */
