import React from 'react'
import { useSearchParams } from "react-router-dom"


function PaymentSuccess() {
  const seachQuery = useSearchParams()[0]

  const referenceNum = seachQuery.get("reference")
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='bg-blue-400 text-black text-3xl'>
      Payment Successfull
      Reference no :-  {referenceNum}
      </div>
      </div>
  )
}

export default PaymentSuccess