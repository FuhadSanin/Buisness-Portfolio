import { Card, CardContent } from "../components/ui/card"
import React from "react"
import Stats from "./Stats"

const WorksProvide = () => {
  return (
    <div className=" h-fit pt-12 pb-12 px-24  bg-white">
      <div className="flex pb-12 flex-col justify-center items-center w-full ">
        <h1 className="text-9xl ">
          ENCHANT <br /> <span className="text-right">YOUR</span> <br />
          AUDIENCE
        </h1>
      </div>
      <div className="flex justify-between  pb-12 space-x-12  text-white box-border">
        <div className="w-3/5 h-[400px] sticky top-[25%]">
          <img
            src="https://dummyimage.com/600x400/"
            alt="Product preview"
            className="w-full rounded-lg"
          />
        </div>
        <p className="w-2/5 leading-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <Card key={i} className="w-full">
              <CardContent className="rounded-3xl bg-popover p-14 text-center shadow-xl">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h2 className="mb-1 text-xs font-medium tracking-widest">
                  CATEGORY
                </h2>
                <h1 className="mb-3 font-medium text-xl sm:text-2xl">
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
        </p>
      </div>
    </div>
  )
}

export default WorksProvide
