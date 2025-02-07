const { parentPort, workerData } = require("worker_threads");

const mappedData = workerData.map((line) => {
    const [modelo, velocidade] = line.split(",");
    return {
        modelo: modelo.trim(),
        velocidade: parseFloat(velocidade)
    };
});

parentPort.postMessage(mappedData);
