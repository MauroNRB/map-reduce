const fs = require("fs");

function readFile(filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, "utf8", (err, data) => {
            if (err) reject(err);
            else resolve(data.trim().split("\n"));
        });
    });
}

module.exports = { readFile };
