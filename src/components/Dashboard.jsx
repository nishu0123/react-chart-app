import React from 'react'
import StockChart from "./StockChart";
import StockData from './StockData';
import Slidebar from './Sidebar'
import Card from './Card'

function Dashboard() {
  return (
    <div className=''>

      <div className="flex flex-row">
      <div className="h-[70vh] ">
          {/* <Dashboard /> */}
          <Slidebar />
        </div>
        <div className='mx-4 mt-4 w-full'>
          {/* <Slidebar/> */}
          <StockChart info={StockData} />
        </div>


      </div>


      
    </div>
  )
}

export default Dashboard 