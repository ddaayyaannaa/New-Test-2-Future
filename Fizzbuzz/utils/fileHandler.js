const fs = require('fs');

class FileHandler {
    constructor(filename) {
        this.filename = filename;
        this.stream = null;
    }

    async initialize() {
        this.stream = fs.createWriteStream(this.filename, { flags: 'a' });
        const timestamp = new Date().toISOString();
        await this.writeLine(`\n--- FizzBuzz++ Run at ${timestamp} ---\n`);
    }

    async writeLine(text) {
        return new Promise((resolve, reject) => {
            this.stream.write(text + '\n', (err) => {
                if (err) reject(err);
                else resolve();
            });
        });
    }

    close() {
        if (this.stream) {
            this.stream.end();
        }
    }
}

module.exports = { FileHandler };