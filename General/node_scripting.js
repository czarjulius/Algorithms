const fs = require('fs');

function parseJSONFromFile(filePath) {
  return new Promise((resolve, reject) => {
    fs.stat(filePath, (err, stats) => {
      if (err) {
        if (err.code === 'ENOENT') {
          reject(new Error('File Does Not Exist'));
        } else {
          reject(err);
        }
        return;
      }

      if (stats.isDirectory()) {
        reject(new Error('Path is a directory'));
        return;
      }

      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          reject(err);
          return;
        }

        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error('JSON invalid'));
        }
      });
    });
  });
}

// Example usage:
const filePath = '/path/to/file.json';
parseJSONFromFile(filePath)
  .then((jsonData) => {
    console.log('Parsed JSON data:', jsonData);
  })
  .catch((error) => {
    console.error('Error:', error.message);
  });
