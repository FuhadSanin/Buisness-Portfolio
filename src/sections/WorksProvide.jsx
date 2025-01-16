import { Card, CardContent, CardDescription } from "../components/ui/card"
import React from "react"
import Stats from "./Stats"
import video from "@/assets/studio-5.mp4"
import react from "../assets/icons/reactjs.png"
import react_native from "../assets/icons/react_native.png"
import team from "../assets/icons/team-1.jpg"

const WorksProvide = () => {
  return (
    <div className=" h-fit pt-24 pb-12 lg:px-24 px-5">
      <div className="flex pb-24 flex-col justify-center items-center w-full">
        <h1 className="text-center text-white w-full font-medium leading-none">
          <span className="text-center text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] -ml-20 md:-ml-32 lg:-ml-52">
            MEET OUR
          </span>
          <span className="flex  text-center text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] ml-20 md:ml-40 lg:ml-[40rem]">
            <iframe
              className="w-24 "
              src="https://lottie.host/embed/6c7830c9-3444-4898-a358-6960f3cde9c6/fCQ0ZaDnbD.json"
            ></iframe>
            TEAM
          </span>
          <span className=" block text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] -ml-12 md:-ml-24 lg:-ml-32">
            MEMBERS
          </span>
        </h1>
      </div>
      <div className="flex lg:flex-row flex-col-reverse justify-around  text-white box-border">
        <div className="lg:w-2/5 w-full h-fit  rounded-3xl lg:sticky lg:top-[20%]">
          <video
            preload="auto"
            muted
            playsInline
            autoPlay
            loop
            // src={video}
            src="https://themenectar.com/salient/wp-content/uploads/sites/4/2022/07/page-builder-1.mp4"
            className="rounded-3xl"
            onCanPlay={e => e.target.play()} // Ensure video starts playing once ready
            onLoadedData={e => e.target.play()} // Alternatively use onLoadedData
          ></video>
        </div>
        <div className="lg:w-2/3 w-full lg:space-y-24 space-y-10 mb-4 flex flex-col justify-center items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="lg:w-2/3 w-full border-0 bg-black">
              <CardContent className=" bg-popover p-14 rounded-3xl text-center bg-black ">
                <h1 className="text-white  font-medium text-3xl sm:text-5xl mb-6">
                  FRONTEND EXPERTS
                </h1>
                <CardDescription className=" text-center mt-6 mb-6">
                  Our Frontend Developers craft stunning, responsive interfaces
                  that prioritize seamless navigation.
                </CardDescription>
                <div className="mt-6 flex justify-center items-center space-x-4 flex-wrap gap-4">
                  <div className="rounded-full bg-white p-2 w-24 overflow-hidden ">
                    <img
                      src={team}
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-white p-2 w-24 overflow-hidden ">
                    <img
                      src={team}
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-white p-2 w-24 overflow-hidden ">
                    <img
                      src={team}
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-full bg-white p-2 w-24 overflow-hidden ">
                    <img
                      src={team}
                      alt="react"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorksProvide
