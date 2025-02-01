function sortResults(data) {
    return Object.entries(data)
        .map(([modelo, info]) => ({
            'Modelo': modelo,
            'Média Velocidade': Number((info.totalVelocidade / info.totalCarros).toFixed(2)),
            'Total Carros': info.totalCarros
        }))
        .sort((a, b) => b.totalCarros - a.totalCarros);
}

module.exports = { sortResults };
