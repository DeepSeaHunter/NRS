import React from 'react';

const Medcard=({name,price,link,imglink,company,func})=>{

return(<div className='flex ba br4 bg-light-green ph6' >
<div><img src={imglink} alt='no image,sorry' style={{height:'100px',width:'100px'}} /></div>
<div>
<p id='name'>name:{name}</p>
<p id='price'>Price:{price}</p>
<p id='seller'>Seller:{company}</p>
<p><a href={link}>Visit Page!</a></p>
<input type='button' onClick={func} value='add to cart'/>
</div>
</div>)
}

export default Medcard