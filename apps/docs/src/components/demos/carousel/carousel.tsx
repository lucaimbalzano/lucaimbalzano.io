import {
  Card,
  CardContent,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@simbashrd/ui'
import { range } from '@simbashrd/utils'

const CarouselDemo = () => {
  return (
    <Carousel className='w-full max-w-md'>
      <CarouselContent>
        {range(5).map((number) => (
          <CarouselItem key={number}>
            <div className='p-1'>
              <Card>
                <CardContent className='flex aspect-square items-center justify-center p-6'>
                  <span className='text-4xl font-semibold'>{number + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default CarouselDemo
