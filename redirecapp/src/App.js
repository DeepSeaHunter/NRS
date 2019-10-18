import React, {useState} from 'react';
import './App.css';
import {Redirect} from 'react-router-dom';
import Header from './header';
import 'tachyons' 

function App() {

const [redirect,setRedirect]=useState(false);
const [term,setTerm]=useState('');


const transcriptor=(english)=>{
  var georgian=["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი","კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს","ტ",
  "უ","ფ","ქ","ღ","ყ","შ","ჩ","ც","ძ","წ","ჭ","ხ","ჯ","ჰ",' ',"-"];
  var engl=['a','b,','g','d','e','v','z','t','i','k','l','m','n','o','p','J','r','s','T','u','f','q','R',
  'y','S','C','c','Z','w','W','x','j','h',' ','-'];
  var resulted='';
  for(var i=0;i<english.length;i++){
 if(engl.includes(english.charAt(i))){
      resulted=resulted+georgian[engl.indexOf(english.charAt(i))];
  }
  else{
    resulted=resulted+english.charAt(i);
  }
  }
  
  return resulted.length>0? resulted:english;
  }

if(redirect){
 return <Redirect to={'/real/'+term} />
}

  return (
    <div>
    
    <Header/>
    
<header class="tc ph4">
  <h1 class="f3 f2-m f1-l fw2 white-90 mv3">
    Search any Medicine in Georgia
  </h1>
  <h2 class="f5 f4-m f3-l fw2 blue mt0 lh-copy">
   A JS Learning Project
  </h2>
</header>

    <div class="pa4-l">
  <div class="bg-light-green mw7 center pa4 br2-ns ba b--black-10">
    <fieldset class="cf bn ma0 pa0">
      <legend class="pa0 f5 f4-ns mb3 black-80">Search a Medicine</legend>
      <div class="cf">
        <input class="f6 f5-l input-reset bn fl black-80 bg-white pa3 lh-solid w-100 w-75-m w-80-l br2-ns br--left-ns" placeholder="Enter a name" type="text" id="email-address" onChange={(event)=>{setTerm( transcriptor(event.target.value))
        event.target.value=transcriptor(event.target.value);
        }}/>
        <input class="f6 f5-l button-reset fl pv3 tc bn bg-animate bg-black-70 hover-bg-black white pointer w-100 w-25-m w-20-l br2-ns br--right-ns" type="submit" value="Search" onClick={()=>setRedirect(true)} />
      </div>
    </fieldset>
  </div>
</div>


    </div>

    
  );
}

export default App;
