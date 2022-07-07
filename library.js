let moment = require("moment");

let braasilTetra = moment('17071994','DDMMYYYY');
let fromNow = braasilTetra.fromNow()

console.log('Ouvimos o grito do treta ah:', fromNow);