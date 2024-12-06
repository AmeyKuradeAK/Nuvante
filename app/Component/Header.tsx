import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='bg-black md:max-2xl:h-[40px] mt-0'>
        <div className='text-white text-right md:max-2xl:pr-44 md:max-2xl:pt-2 md:max-2xl:text-sm'>
            English 
        </div>
    </div>
  )
}

export default Header