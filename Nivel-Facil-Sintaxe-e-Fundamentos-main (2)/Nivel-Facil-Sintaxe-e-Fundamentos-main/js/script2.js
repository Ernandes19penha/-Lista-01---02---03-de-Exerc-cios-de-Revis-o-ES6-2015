// 2. Nomes Próprios (Capitalização)

const nomes = ["ana", "joão", "maria"];

const capitalizados = nomes.map(n => n[0].toUpperCase() + n.slice(1));

console.log("2. Capitalizados:", capitalizados); // ["Ana", "João", "Maria"]