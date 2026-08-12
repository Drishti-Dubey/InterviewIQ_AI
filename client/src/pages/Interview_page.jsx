import React from 'react'
import { useState } from 'react'
import Step_1_SetUp from '../components/Step_1_SetUp'
import Step_2_Interview from '../components/Step_2_Interview'
import Step_3_Report from '../components/Step_3_Report'


function Interview_page() {
const[step,setStep]=useState(1)
const [interviewData,setInterviewData]=useState(null)

  return (
    <div className='min-h-screen bg-gray-50'>

        {step==1 &&(
            <Step_1_SetUp onStart={(data)=>{
                setInterviewData(data);
                setStep(2)
            }}/>
        )}

         {step==2 &&(
            <Step_2_Interview interviewData={interviewData}
            onFinish={(report)=>{setInterviewData(report);
                setStep(3)
            }}
            />
        )}
 
         {step==3 &&(
            <Step_3_Report report={interviewData}/>
        )}

      
    </div>
  )
}

export default Interview_page
