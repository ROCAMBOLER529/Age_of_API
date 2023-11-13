/*
+--------------------+
|                    |
| helpers/helpers.js |
|                    |
+--------------------+
*/

// Helper file of specific functions

const replaceChar = (old_char, new_char, str) => {
    const regex = new RegExp(old_char, 'g');
    return str.replace(regex, new_char);

    // str
}

module.exports = {
    replaceChar
}