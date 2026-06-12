// 8. Extrair Nomes de Cidades

const cidades = [
  { nome: "São Paulo", populacao: 12300000 },
  { nome: "Curitiba", populacao: 1900000 },
  { nome: "Rio de Janeiro", populacao: 6700000 }
];


const nomesDasCidades = cidades.map(cidade => cidade.nome);

console.log(nomesDasCidades); 