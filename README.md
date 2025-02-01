# MapReduce

Esta aplicação tem como objetivo testar a técnica de MapReduce em um cenário real, utilizando uma base de dados extensa sobre modelos de carros e suas médias de velocidade.

## Tecnologias trabalhadas
- NodeJS v20.13.1

## Comandos para executar

Para executar o padrão:

```
npm start
```

Roda com 4 threds e com o arquivo padrão de exemplo

---

Para rodar com mais threds

```
npm start workers=16
```

Sendo para trocar o número de threds o valor do parâmetro do workers

---

Para rodar com outros arquivos

```
npm start file="C:\Users\mauro\Documents\cars.txt"
```

Sendo para trocar a rota do arquivo o valor do parâmetro do file

---

Para rodar com threds e file diferente basta rodar os dois parâmetros com valores diferentes


