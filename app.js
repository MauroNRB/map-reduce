const { Worker } = require("worker_threads");
const { readFile } = require("./utils/fileReader");
const { sortResults } = require("./utils/sorter");

const args = process.argv.slice(2);
let params = {};

args.forEach((arg) => {
    const [key, value] = arg.split("=");
    params[key] = value;
});

const NUM_WORKERS = params.workers ? parseInt(params.workers) : 4;

async function mapReduce(filename) {
    try {
        const lines = await readFile(filename);
        const chunkSize = Math.ceil(lines.length / NUM_WORKERS);
        let chunks = [];
        let results = [];

        for (let i = 0; i < NUM_WORKERS; i++) {
            chunks.push(lines.slice(i * chunkSize, (i + 1) * chunkSize));
        }

        let completedWorkers = 0;
        chunks.forEach((chunk) => {
            const worker = new Worker("./workers/mapWorker.js", {
                workerData: chunk,
            });
            worker.on("message", (result) => {
                results = results.concat(result);
                completedWorkers++;

                if (completedWorkers === NUM_WORKERS) {
                    reduceData(results);
                }
            });
        });
    } catch (err) {
        console.error("Erro ao processar:", err);
    }
}

function reduceData(mappedData) {
    const worker = new Worker("./workers/reduceWorker.js", {
        workerData: mappedData,
    });
    worker.on("message", (reducedData) => {
        const sortedData = sortResults(reducedData);
        console.log("Estatísticas dos Carros:");
        console.table(sortedData);
    });
}

mapReduce(params.file ? params.file : "./examples/cars.txt");
