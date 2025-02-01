const { parentPort, workerData } = require("worker_threads");

const reducedData = workerData.reduce(
    (acc, { modelo, velocidade, quantidade }) => {
        if (!acc[modelo]) {
            acc[modelo] = { totalVelocidade: 0, totalCarros: 0 };
        }
        acc[modelo].totalVelocidade += velocidade * quantidade;
        acc[modelo].totalCarros += quantidade;
        return acc;
    },
    {}
);

parentPort.postMessage(reducedData);
