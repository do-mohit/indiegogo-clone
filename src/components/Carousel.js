import carouselData from '../libs/carouselData'
import { AiOutlineLeftCircle, AiOutlineRightCircle } from 'react-icons/ai'
import { useState } from 'react'
import Button from './Button'
function Carousel() {
    const [currentIndex, changeIndex] = useState(0)
    const carSize = carouselData.length
    return (
        <section className="relative flex h-[36rem] w-full flex-col lg:h-[30rem]">
            <div
                style={{
                    backgroundImage: `url(${carouselData[currentIndex].image})`,
                }}
                className={`relative w-full flex-grow bg-cover bg-center bg-no-repeat`}
            >
                <div className="h-full w-full bg-black opacity-40"></div>
            </div>
            <div className=" bg-slate-100 py-4 px-10 text-black lg:absolute lg:bottom-8 lg:left-40 lg:bg-transparent lg:text-white">
                <h1 className="underline">Featured</h1>
                <h1 className="font-bold leading-6"> live</h1>
                <h1 className="leading-6"> live</h1>
                <div className="mt-4 flex items-center">
                    <AiOutlineLeftCircle
                        size="40px"
                        onClick={() => {
                            if (currentIndex == 0) changeIndex(carSize - 1)
                            else changeIndex(currentIndex - 1)
                        }}
                    />
                    <AiOutlineRightCircle
                        size="40px"
                        className="mx-2"
                        onClick={() => {
                            if (currentIndex == carSize - 1) changeIndex(0)
                            else changeIndex(currentIndex + 1)
                        }}
                    />
                    <p className="mx-2 inline">
                        {currentIndex + 1} / {carSize}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Carousel
