const request = require('request-promise');
const cheerio = require('cheerio')



var aversi = async (searchword) => {
    try{
    const link_aversi = 'https://www.aversi.ge/ka/aversi/act/searchMedicine/?kw=';
    const c = encodeURI(link_aversi + searchword);
    var aversiObj = [];
    const a = await request((c), (error, res, body) => {
    })

    const dom = cheerio.load(a);

    dom('.price').each(function (a, b) {

        aversiObj.push({ price: dom(this).text().match(/(\d*\d)/g)[0] + "." + dom(this).text().match(/(\d*\d)/g)[1], comp: 'aversi' })

    })

    dom('.product-title').each(function (a, b) {
        aversiObj[a].name = dom(this).text();

    })
    var k = 0;

    Object.values(dom('.product-thumb').children()).forEach((uh, i) => {
        if (uh.name === 'a') {
            aversiObj[k].link = 'https://www.aversi.ge/' + uh.attribs.href;
            aversiObj[k].imgL = 'https://www.aversi.ge/' + uh.children[1].attribs.src;
            k = k + 1;
        }
    })
    return aversiObj;
    }catch{
        return []
    }
    return aversiObj;


}

module.exports = aversi;

