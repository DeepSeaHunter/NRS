import React, { useEffect, useState } from 'react';
import Dummymount from './dummy.js'
import Header from './header'
import FilterBox from './FilterBox';
import Scrobllable from './scrollable';
import Calculator from './calculator'
const Rsearch = ({ match }) => {
  const [dummy, setDummy] = useState({});
  const [dummy1, setDummy1] = useState(match.params.kw);
  const [priceFilter, setPricefilter] = useState('');
  const [companyFilter, setCompanyfilter] = useState([]);
  const [maxPrice, setMaxprice] = useState(0);
  const [minPrice, setMinprice] = useState(0);
  const [totalprice, SetTotPrice] = useState([]);
  const [catal, setCatal] = useState(0);
  useEffect(() => {
    var b = async () => {
      var a = await fetch('/medSearch/' + dummy1);
      var b = await a.json();
      setDummy(b);
      if (b.length === 0) {

        setCatal(1);

      }
      else {
        setCatal(2)

      }
    }


    b();
  }, [dummy1])

  var filteredlist = [];

  if (maxPrice > 0) {
    filteredlist = (filteredlist.length > 0 ? filteredlist.filter((val) => { return val.price < maxPrice })
      : dummy.filter((val) => { return val.price < maxPrice }))

  }

  if (minPrice > 0) {
    filteredlist = (filteredlist.length > 0 ? filteredlist.filter((val) => { return val.price > minPrice })
      : dummy.filter((val) => { return val.price > minPrice }))

  }

  if (priceFilter.length > 0) {

    if (priceFilter === 'Asc') {

      (filteredlist.length > 0) ?
        filteredlist = (filteredlist.slice().sort(function (a, b) { return a.price - b.price })) :
        filteredlist = (dummy.slice().sort(function (a, b) { return a.price - b.price }))
    }
    else {
      (filteredlist.length > 0) ?
        filteredlist = (filteredlist.slice().sort(function (a, b) { return b.price - a.price })) :
        filteredlist = (dummy.slice().sort(function (a, b) { return b.price - a.price }))

    }
  }

  if (companyFilter.length > 0) {
    filteredlist.length > 0 ?
      filteredlist = filteredlist.filter((val) => { return companyFilter.includes(val.comp) }) :
      filteredlist = dummy.filter((val) => { return companyFilter.includes(val.comp) });
  }

  const setPriceF = function (event) {
    if (priceFilter === event.target.value) {

      setPricefilter('');
    }
    else {

      setPricefilter(event.target.value);
    }
  }

  const setMax = function (event) {

    setMaxprice(event.target.value);
  }

  const setMP = function (event) {

    setMinprice(event.target.value)
  }

  const filterC = function (event) {

    if (companyFilter.includes(event.target.value)) {

      setCompanyfilter(companyFilter.filter((val) => { return val !== event.target.value }))
    }
    else {
      setCompanyfilter(companyFilter.concat([event.target.value]))

    }
  }

  const addfunc = function (event) {
    const elements = event.target.parentElement;
    let tupush = {};
    tupush['seller'] = elements.querySelector('#seller').innerText.replace('Seller:', '');
    tupush['name'] = elements.querySelector('#name').innerText.replace('name:', '');
    tupush['price'] = elements.querySelector('#price').innerText.replace('Price:', '');

    SetTotPrice(totalprice.concat([tupush]));


  }

  const newSearch = function (event) {
    setCatal(0);
    setDummy1(event.target.previousSibling.value)
  }

  const clearIt = function () {
    SetTotPrice([]);

  }


  return (<div>
    <Header />

    {(catal !== 1) ? (<div><div className='fl w-20 pa2'><FilterBox AscDsc={setPriceF} Company={filterC} MaxPrice={setMax} MinPrice={setMP} newS={newSearch} />
      <div><Calculator clear={clearIt} prodlists={totalprice} /></div></div>
      <div className='fl w-80 pa2'><Scrobllable>{(catal > 0) ? <Dummymount
        val={filteredlist.length > 0 ? filteredlist : dummy} calc={addfunc} /> : <h1>Loading,please Wait...</h1>}</Scrobllable></div></div>) :
      (<div><div className='fl w-20 pa2'><FilterBox AscDsc={setPriceF} Company={filterC} MaxPrice={setMax} MinPrice={setMP} newS={newSearch} />
        <div><Calculator clear={clearIt} prodlists={totalprice} /></div></div>{console.log(catal)}
        <div className='fl w-80 pa2'><Scrobllable><h1>Nothing was Found,are you sure you have name correct?
  </h1></Scrobllable></div></div>)}
  </div>)

}

export default Rsearch