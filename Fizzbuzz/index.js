const { FileHandler } = require('./utils/fileHandler');
const { FizzBuzzService } = require('./services/fizzBuzzService');

async function runFizzBuzz(start, end) {
    const fileHandler = new FileHandler('fizzbuzz.log');
    const fizzBuzzService = new FizzBuzzService();

    try {
        fizzBuzzService.validateRange(start, end);
        await fileHandler.initialize();

        for (let i = start; i <= end; i++) {
            const result = fizzBuzzService.getFizzBuzzStr(i);
            console.log(result);
            await fileHandler.writeLine(result);
        }
    } catch (error) {
        console.error('Error occurred:', error.message);
        process.exit(1);
    } finally {
        fileHandler.close();
    }
}

runFizzBuzz(1, 500);