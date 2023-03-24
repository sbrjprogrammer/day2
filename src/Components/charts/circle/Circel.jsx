import React from 'react'
import { Pie } from 'react-chartjs-2';
// import {Chart as ChartJS, BarElement,CategoryScale,LinearScale,Tooltip,} from "chart.js"

// ChartJS.register(
//     BarElement,CategoryScale,LinearScale,Tooltip,
// )
function Circel() {

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
    <Pie
  options={options}
  data={data}
  
/>
  )
}

export default Circel