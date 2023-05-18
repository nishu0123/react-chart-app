import React from 'react'
// import Barchart  from './Barchart'


function  card() {
  return (
    <>
   
    <div className='flex flex-col justify-start  bg-yellow-50 w-[30vw] h-[30vh] rounded-md' >
        <div  className='mx-4'>
            <p>USD Balance</p>
        </div>
        <div  className='mx-4 flex flex-row gap-4'>
            <p className='font-bold text-[blue]  text-lg'>$34,343.54</p>
            <p>8.34% down</p>
            {/* <p>{props.percentage}% {}</p> */}
        </div>
        <div className='mx-4'>
            <p>Available to payout</p>
        </div>
        <div className='mx-4 h-[70%]'>
            {/* <Barchart/> */}
        </div>

    </div>
    </>
  )
}

export default  card