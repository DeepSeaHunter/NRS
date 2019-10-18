import React from 'react';

const FilterBox=({AscDsc,Company,MaxPrice,MinPrice,newS})=>{
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

return(<div className='bg-blue br3'>
    <div >
    <p>Search new Item!</p>
    <input type='text' placeholder='new Search' className='w-100' onChange={(event)=>{
        
        event.target.value=transcriptor(event.target.value);
        
    }}/>
    <input type='button' value='search!' onClick={newS}/>
    </div>
    <div > 
    <p>Sort By Price</p>       
    <input type='checkbox' name='Ascending' value='Asc' onClick={AscDsc}/>Ascending<br/>
    <input type='checkbox' name='Descending' value='Dsc' onClick={AscDsc}/>Descending
    </div>
    <div >
    <p>Maximum Price</p>
    <input type='number' placeholder='Maximum Price' onChange={MaxPrice} className='w-100'/>    
    </div>
    <div >
    <p>Minimum Price</p>
    <input type='number' placeholder='Min Price' onChange={MinPrice} className='w-100'/>    
    </div>
    <div >
    <p>Seller</p>
    <input type='Checkbox' value='psp' onClick={Company}/>PSP<br/>
    <input type='Checkbox' value='aversi' onClick={Company}/>Aversi<br/>
    <input type='Checkbox' value='GPC' onClick={Company}/>GPC    
    </div>

</div>)
}

export default FilterBox;