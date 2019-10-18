const request = require('request-promise');
const cheerio = require('cheerio');


var gpc = async (kw) => {
    let gpcobj = [];
    const link = 'http://www.gpc.ge/search/index';
    var form = {
        search: kw
    };
    var headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    const body = await request({ uri: link, form, headers, method: 'POST' }, (error, res, body) => {
        return body;
    })

    const dom = cheerio.load(body);



    dom('td a').map(async function () {

        var a = (dom(this)[0].attribs.href);
        var b = ((dom(this)[0].children[0].data));

        var k = await request({ url: 'http://www.gpc.ge' + dom(this)[0].attribs.href, method: 'GET' }, (err, res, body) => {
            return body;
        })

        const newDom = cheerio.load(k);
        gpcobj.push({
            link: 'http://www.gpc.ge' + a,
            name: b,
            imglink: 'http://www.gpc.ge' + newDom('.slider-slick').children()[0].children[1].attribs.src,
            price: newDom('.product-detail-price').text(),
            comp: 'aversi'
        })


    })

    return gpcobj;

}

module.exports = gpc;