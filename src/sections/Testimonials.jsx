import React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  Card,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@components/ui/card"

const Testimonials = () => {
  return (
    <div className=" h-fit pt-12 pb-12 lg:px-24  bg-white">
      <div className="text-center">
        <h1
          className="w-full lg:text-[120px] text-[40px] font-semibold text-center font-serif"
          style={{ WebkitTextStroke: "1px black", color: "white" }}
        >
          TESTIMONIALS
        </h1>
        <p className="text-center text-gray-500">
          "What our customers are saying about us"
        </p>
      </div>
      <div className="mt-6 mb-6 ">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1 lg:basis-1/2">
                <div className="p-1">
                  <Card className="rounded-3xl">
                    <CardContent className="items-center justify-center p-6">
                      <CardDescription className="italic font-medium">
                        "The CRM tool they developed streamlined our customer
                        service process, saving us hours of manual work each
                        week. "
                      </CardDescription>
                      <CardTitle className="flex items-center mt-4 text-md font-medium">
                        <img
                          src="https://dummyimage.com/70x70/"
                          alt="avatar"
                          className="w-10 h-10 mr-2 rounded-full"
                        />
                        Arun{" "}
                        <span className="text-gray-500">
                          (Operations Manager)
                        </span>
                      </CardTitle>
                      <div className="flex space-x-2 mt-5 text-yellow-400 text-2xl">
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>☆</span>
                        <span>☆</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}

export default Testimonials
