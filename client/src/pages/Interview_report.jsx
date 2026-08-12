import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios' 
import {ServerUrl} from '../App'
import Step_3_Report from '../components/Step_3_Report'



function Interview_report() {
const {id}=useParams()
const [report,setReport] =useState(null)


useEffect(()=>{
  const fetchReport=async () => {
    try {
      const result=await axios.get(ServerUrl+"/api/interview/report/"+id,{withCredentials:true})
      console.log(result.data)

setReport(result.data)

    } catch (error) {
      console.log(error)
    }
  }
  fetchReport()
},[])

if(!report)
{
  return(
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-gray-500 text-lg'>Loading Report...</p>
    </div>
  );
}



  return <Step_3_Report report={report}/>
}

export default Interview_report



