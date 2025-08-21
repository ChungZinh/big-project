const user = require("./data");



const u = user.find((u) => u.slug === 'alice');

console.log(u);