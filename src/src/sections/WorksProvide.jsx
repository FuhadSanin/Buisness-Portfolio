import { Card, CardContent } from "../components/ui/card"
import React from "react"

const WorksProvide = () => {
  return (
    <section>
      <div class="container px-5 py-14 mx-auto">
        <div class="flex flex-wrap -m-4">
          <Card class="p-6 lg:w-1/3 ">
            <CardContent class="h-full pt-16 pb-24 space-y-7 overflow-hidden text-center flex flex-col items-center justify-center relative">
              <span class="font-thin text-7xl">What We Do</span>
              <span class="block font-bold text-7xl tracking-widest">
                EXPERTS
              </span>
              <span class="font-extralight  text-3xl">
                We build digital solution
              </span>
            </CardContent>
          </Card>
          {Array.from({ length: 5 }).map((_, i) => (
            <Card class="p-10 lg:w-1/3">
              <CardContent class="h-full bg-popover border rounded-3xl shadow-xl border-gray-200 px-14 pt-14 pb-14  overflow-hidden text-center relative">
                <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>

                <h2 class="tracking-widest text-xs title-font font-medium  mb-1">
                  CATEGORY
                </h2>
                <h1 class="title-font sm:text-2xl text-xl font-medium mb-3">
                  Raclette Blueberry Nextious Level
                </h1>
                <p class="leading-relaxed mb-3 text-gray-500">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <a class="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    class="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorksProvide
