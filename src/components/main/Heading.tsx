import React from 'react'

const Heading = (props: {customClass: string, subHeading: string, mainHeading: string}) => {
  return (
    <div className={`max-w-3xl  ${props.customClass}`}>
        <h6 className='text-dark-green text-xl capitalize font-medium '>{props.subHeading}</h6>
        <h3 className=' text-[40px] font-bold capitalize'>{props.mainHeading}</h3>
    </div>
  )
}

export default Heading