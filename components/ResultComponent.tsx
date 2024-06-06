import React from 'react'
import OptionComponent from './OptionComponent'

const ResultComponent = () => {
  return (
    <div className='p-4 flex flex-col gap-2 max-h-[15rem] overflow-y-scroll '>
        <h2 className='text-[12px] font-semibold'>Results</h2>
        <div>
            <OptionComponent option={1} text='Hey cutie' /> 
        </div>
        <div className='flex gap-4'>
        <OptionComponent option={1} text='Hey cutie' /> 
        <OptionComponent option={1} text='Hey cutie' /> 
        </div>
    </div>
  )
}

export default ResultComponent