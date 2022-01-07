import React from 'react'
import { useState } from 'react'
import './Accordion.css'
export default function Accordian({content,title}) {
    const [Open,setOpen]=useState(false)
    
    return (
      <div>
        <div className="accordion-head" onClick={()=>{setOpen(!Open)}}>
          <div></div>
          <div className='my-title'>{title}</div>
          <img  className={Open} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPW3aLEP1ONTIWvbDVpI-6zzW_SiXLC93K9g&usqp=CAU" alt="accordian-dropdown-icon"></img>
        </div>
        {Open? <div className='my-content'>{content}</div>:<div></div>}
      </div>
    );
}