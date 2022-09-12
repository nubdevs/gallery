import React from 'react'


export default function Icard(props) {
  return (
   <>
   <div className='p-1 md:p-2 w-1/2 md:w-1/3 lg:w-1/4'>
        <div className="w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-60 md:h-36 h-28 w-full object-cover object-center" src={props.url} alt="blog"/>

        
          
          </div>
        </div>
     
    </>
  )
}
