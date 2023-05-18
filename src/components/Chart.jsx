
import React from 'react'
import { Bar } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Pie } from "react-chartjs-2";
// import Linechart from './Linechart'
// import Barchart from './Barchart'
// import Piechart from './Piechart'
import { useState } from 'react';
import { UserData } from './Data'
import { Chart as ChartJS } from 'chart.js/auto';



function chart() {
    // console.log(UserData.length);
    let array = [];
    if (UserData && UserData.length > 0) {
        array = UserData.map((data) => data.year);
    }
    const [userData, setuserData] = useState({

        labels: array,

        datasets: [
            {
                label: "user gained",
                data: UserData.map((data) => data.usergain),
                backgroundColor: ['blue', 'green'],

            },
        ],
    });
    // console.log(labels);
    // console.log(UserData);

    return (
        <>
            {/* grid gap-6 grid-rows-2 grid-cols-2 */}
            <div className=' flex flex-col gap-[1rem] mt-4 bg-repeat md:gap-[2rem] md:justify-between  md:h-[30vh] md:w-[40vw] md:mx-[10rem] md:mt-4'  >

                <div className='my-2'>
                    {/* <Barchart chartData={userData} /> */}
                    <Bar data={userData} />
                </div>
                <div className='my-4'>
                    {/* <Linechart chartData={userData} /> */}
                    <Line data={userData} />
                </div>
                <div className='my-2' >

                    {/* <Pie data={userData} /> */}
                    {/* <KaggleDataset/> */}
                </div>

            </div>
        </>
    )
}

export default chart