import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


type Props = {}

const Hero = (props: Props) => {
    return (
        <div className='flex flex-row justify-evenly text-black'>
            <div className='md:max-2xl:mr-[480px] md:max-2xl:py-6 flex flex-col border-r-2'>
                <div className='flex flex-row'>
                    <div>
                        T-Shirts
                    </div>
                    <div className='ml-8 pr-20'>
                        &gt;
                    </div>
                </div>
                <div className='pt-2 flex flex-row'>
                    <div>
                        Hoodies
                    </div>
                    <div className='ml-8'>
                        &gt;
                    </div>
                </div>
            </div>
            <div>
                <div className='py-32 mr-28'>
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>1</CarouselItem>
                            <CarouselItem>2</CarouselItem>
                            <CarouselItem>3</CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                </div>
            </div>
        </div>
    )
}

export default Hero