const aversi = require('../crawlers/aversi');
const psp = require('../crawlers/psp');
//const gps = require('gps');

const getdata = async (kw) => {
    var aversis = await aversi(kw);
    var psps = await psp(kw);
    //var gpss = await gps(kw);

    var finaldata = (aversis.concat(psps));


    return finaldata;


}


module.exports = getdata;