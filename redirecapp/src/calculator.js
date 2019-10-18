import React from 'react';

const Calculator=({prodlists,clear})=>{
 var a=0;

 prodlists.map((value)=>{
   
   return a=a+parseFloat(value.price);
})

return(<div className='bg-blue br3'>
    <h3>Items you picked!</h3>
{prodlists.length>0? (<div>{
    prodlists.map((value,i)=>{
      return(<div className='b--dotted'>
          <h4>Item {i+1}</h4>
          <p>name:{value.name}</p>
          <p>seller:{value.seller}</p>
      </div>)
    })
}
<p>TotalPrice:{a}</p>
<input type='button' value='clear' onClick={clear}/>
</div>)
:<div><p>Nothing Selected Yet</p></div>}
</div>)


}

export default Calculator;