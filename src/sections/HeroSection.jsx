import { useState } from "react"
import hero from "@/assets/hero.jpg"
import hero2 from "@/assets/test.avif"
import video from "@/assets/studio-5.mp4"

import { Menu } from "lucide-react"
import { Button } from "../components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel"

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative w-full overflow-hidden h-screen text-white">
      <div className="absolute inset-0 bg-cover bg-center p-10">
        <video
          preload="auto"
          muted
          playsInline
          autoPlay
          // src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/page-builder-1.mp4"
          // src={video}
          src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/element-collection3.mp4"
          className="rounded-3xl w-full h-full object-cover"
          onCanPlay={e => e.target.play()} // Ensure video starts playing once ready
          onLoadedData={e => e.target.play()} // Alternatively use onLoadedData
        ></video>
      </div>

      {/* Main Content */}
      <div className="relative h-screen bg-gradient-to-b from-[rgba(0,0,0,0.7)] to-[rgba(0,0,0,0.9)] isolate px-6 pt-14 lg:px-8 z-10">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          {/* <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 ">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-white/50 hover:ring-white/90">
              Announcing our next round of funding.{" "}
              <a href="#" className="font-semibold text-green-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-7xl">
              Your Vision, Our Expertise
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              We are a team of dedicated professionals passionate about
              delivering tailor-made solutions that meet your business needs.
              From CRM tools to slot booking systems, we craft innovative
              solutions that drive success.
            </p>
          </div>
        </div>
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div> */}
      </div>
    </div>
  )
}

export default HeroSection
