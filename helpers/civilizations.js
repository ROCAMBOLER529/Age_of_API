/*
+--------------------+
|                    |
| helpers/helpers.js |
|                    |
+--------------------+
*/

// Helper file of specific functions

const data = require('../json/data.json');

const replaceChar = (old_char, new_char, str) => {
    const regex = new RegExp(old_char, 'g');
    return str.replace(regex, new_char);
}

module.exports = {
    replaceChar
}