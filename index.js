const moment = require('moment')


const now = moment()
console.log(now);

const birthday = moment('06/03/1997', 'DD/MM/YYYY')
console.log(birthday);

const leandro = now.diff(birthday, 'days')
const result = `Desde mi nacimiento ha pasado ${leandro} dias.`

console.log(leandro)
console.log(result)