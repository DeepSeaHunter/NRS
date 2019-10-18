const request = require('request-promise');
const cheerio = require('cheerio');

const psp = async (keyword) => {
    try{
    const headl = 'https://psponline.ge/index.php?/View-all-products-in-shop.html?keyword=';
    const link = headl + keyword;
    let pspobject = [];
    const body = await request(encodeURI(link), function (error, res, body) {
        return body;
    })

    const dom = cheerio.load(body);
    
    dom('.carousel.slide').remove();
   

    dom('.product_name').each(function () {
        var a = dom(this).text().replace('\n\t\t\t        \n\t\t\t\t\t\t', '');
        a = a.replace('\t\t\t\t\t\n\t\t\t    ', '');
        a = a.replace('\n\t\t\t\t', '');
        a = a.replace('\t\t\t', '');
        pspobject.push({ name: a, comp: 'psp' });
        
    })
    var k = 0;

    dom('.productPrice').each(function () {
        if (dom(this).parent().attr('class') !== 'productPrice ui-corner-all') {
            pspobject[k].price = (dom(this).text().match(/\d{1,}/g).join()).replace(',','.');
            k = k + 1;
        }
    })
    k = 0;

    dom('.giftbox').each(function () {
        pspobject[k].link = 'https://psponline.ge/' + dom(this).children()[0].attribs.href;
        if(dom(this).children()[0].children[3]){
        pspobject[k].imgL = dom(this).children()[0].children[3].attribs.src;
        }
        k = k + 1
    })
    
    if (pspobject[0].link === undefined) {
        if (dom('.ProdImg a a')[0]) {
            pspobject[0].imgL = 'https://psponline.ge/' + dom('.ProdImg a a')[0].attribs.href;
            pspobject[0].link = link;
            
        }
        pspobject[0].link = link;
        if(dom('.ProdImg a')[0]){
        pspobject[0].imgL = 'https://psponline.ge/' + dom('.ProdImg a')[0].attribs.href;
        }
       
    }
    return pspobject;
    }catch(error){
        console.log(error)
        return []
    }


}

module.exports = psp;