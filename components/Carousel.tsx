import {
    Carousel as UiCarousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselWrapper = () => {
  return (
    <div className="flex justify-center items-center my-8">
      <UiCarousel className="w-full max-w-5xl rounded-xl">
        <CarouselContent>
          <CarouselItem>
            <img 
              src="/Images/CarouselImages\download (1).jpeg" 
              alt="Image 1" 
              className="w-full h-full object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img 
              src="/Images/CarouselImages\download.jpeg" 
              alt="Image 2" 
              className="w-full h-full object-cover rounded-xl"
            />
          </CarouselItem>
          <CarouselItem>
            <img 
              src="/Images/CarouselImages\download (1).jpeg" 
              alt="Image 3" 
              className="w-full h-full object-cover rounded-xl"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white" />
        <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white" />
      </UiCarousel>
    </div>
  );
}

export default CarouselWrapper;
