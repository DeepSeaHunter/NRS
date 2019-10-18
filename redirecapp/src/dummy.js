import React from 'react';
import Medcard from './medcard'

const Dummymount=({val,calc})=>{

    return(<div>
    {val.map((value)=>{

        return(<div>
            <Medcard name={value.name} price={value.price} link={value.link} imglink={value.imgL} 
            company={value.comp} func={calc}/>
        </div>)
    })}
    </div>)

}

export default Dummymount 