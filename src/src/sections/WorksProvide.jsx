import { Card, CardContent } from "../components/ui/card"
import React from "react"
import Stats from "./Stats"

const WorksProvide = () => {
  return (
    <div className=" h-fit pt-12 pb-12 px-24">
      <div className="flex pb-24 flex-col justify-center items-center w-full">
        <h1 className="text-center text-white w-full font-medium leading-tight">
          <span className="block text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] -ml-20 md:-ml-32 lg:-ml-52">
            ENCHANT
          </span>
          <span className="block text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] ml-20 md:ml-40 lg:ml-72">
            YOUR
          </span>
          <span className="block text-[80px] sm:text-[100px] md:text-[140px] lg:text-[160px] -ml-12 md:-ml-24 lg:-ml-32">
            AUDIENCE
          </span>
        </h1>
      </div>
      <div className="flex justify-between space-x-12  text-white box-border">
        <div className="w-3/5 h-fit rounded-3xl sticky top-[20%]">
          <img
            src="https://dummyimage.com/600x500/"
            alt="Product preview"
            className="w-full rounded-3xl"
          />
        </div>
        <div className=" space-y-12 flex flex-col justify-center items-center">
          {Array.from({ length: 4 }).map((_, i) => (
            <Card
              key={i}
              className="w-2/3 rounded-3xl bg-black border-2 border-gray-700"
            >
              <CardContent className=" bg-popover p-14 rounded-3xl text-center bg-black ">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100  text-indigo-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="mb-1 text-xs font-medium tracking-widest">
                  CATEGORY
                </h2>
                <h1 className="text-white mb-3 font-medium text-xl sm:text-2xl">
                  Raclette Blueberry Nextious Level
                </h1>
                <p className="mb-3 leading-relaxed text-gray-500">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a className="inline-flex items-center text-indigo-500 cursor-pointer hover:text-indigo-600">
                  Learn More
                  <svg
                    className="ml-2 h-4 w-4"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorksProvide
