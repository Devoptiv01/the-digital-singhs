import React from 'react'
import ProjectsSlider from '../home/ProjectsSlider'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <div>
{/* <!-- Container --> */}
<div className="relative h-full w-full flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-7xl gap-5 md:gap-20 overflow-hidden">

    {/* <!-- Image Column --> */}
    <div className="w-full h-full lg:w-1/2 lg:h-auto">
        {/* <img className="h-full w-full object-cover" src="https://picsum.photos/id/1018/2000" alt="Winding mountain road"/> */}
        <div className=" h-full mx-auto">
            <ProjectsSlider />
        </div>
    </div>
    {/* <!-- Close Image Column --> */}

    {/* <!-- Text Column --> */}
    <div
        className="bg-white w-full md:max-w-2xl md:z-10 md:shadow-lg  lg:w-3/5 overflow-hidden">
        {/* <!-- Text Wrapper --> */}
        <div className="flex flex-col p-5 sm:p-12 md:px-16">
            <h2 className="text-2xl font-semibold uppercase text-green-800 lg:text-4xl">Winding Mountain Road</h2>
            <p className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            {/* <!-- Button Container --> */}
            <div className="mt-8">
                <Link href="/contact-us"
                    className="inline-block w-full text-center text-lg font-medium text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-green-800 hover:shadow-md md:w-48">
                    Contact us
                    </Link>
            </div>
        </div>
        {/* <!-- Close Text Wrapper --> */}
    </div>
    {/* <!-- Close Text Column --> */}

</div>
    </div>
  )
}

export default HeroSection
