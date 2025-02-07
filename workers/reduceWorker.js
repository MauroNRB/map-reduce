const { parentPort, workerData } = require("worker_threads");

const reducedData = workerData.reduce(
    (acc, { modelo, velocidade }) => {
        if (!acc[modelo]) {
            acc[modelo] = { totalVelocidade: 0, totalCarros: 0 };
        }
        
        acc[modelo].totalVelocidade += velocidade;
        acc[modelo].totalCarros += 1;
        return acc;
    },
    {}
);

parentPort.postMessage(reducedData);
