// 6. Map com Índice (Parâmetros)

const itens = ["Caderno", "Lápis", "Borracha"];

const listaFormatada = itens.map((valor, i) => `Índice ${i}: Valor ${valor}`);

console.log("6. Lista com índices:", listaFormatada);