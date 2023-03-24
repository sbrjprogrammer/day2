import React from 'react'
import {Chart as ChartJS, BarElement,CategoryScale,LinearScale,Tooltip,ArcElement} from "chart.js"
import { Bar, Line } from 'react-chartjs-2';


ChartJS.register(
    BarElement,CategoryScale,LinearScale,Tooltip,ArcElement
)



function Bar1() {

    const data = {
        labels:['Almon oil','baso 250 ev','Almond oil btl',"dashi cracker"],
        datasets:[
            {
                label:'sales in 2023',
                data:[20,70,90,250],
                backgroundColor:"#7CB5EC",
                borderColor:'black',
                borderWidth:1,
            }
        ]
    }

    const options={
        
    }
  return (
   <Bar data={data} options={options}/>
  )
}

export default Bar1