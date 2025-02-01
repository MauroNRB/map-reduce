const { parentPort, workerData } = require("worker_threads");

const mappedData = workerData.map((line) => {
    const [modelo, velocidade, quantidade] = line.split(",");
    return {
        modelo: modelo.trim(),
        velocidade: parseFloat(velocidade),
        quantidade: parseInt(quantidade),
    };
});

parentPort.postMessage(mappedData);
