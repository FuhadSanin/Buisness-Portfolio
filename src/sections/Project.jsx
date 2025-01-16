import { Button } from "../components/ui/button"
import { CardDescription, CardTitle } from "../components/ui/card"
import React, { useState, useEffect } from "react"
import Marquee from "react-fast-marquee"

import { CalendarDays } from "lucide-react"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../components/ui/hover-card"

const Project = () => {
  const [scrollSpeed, setScrollSpeed] = useState(0) // Speed starts at 0

  const data = [
    {
      title: "Project Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Heloo world this is a test of the emergency broadcast system. This is only a test. If this were a real emergency, you would be instructed to tune in to your local emergency broadcast station for further instructions.",
      image: "https://dummyimage.com/500x300/",
      tags: ["Software"],
    },
    {
      title: "Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Heloo world this is a test of the emergency broadcast system. This is only a test. If this were a real emergency, you would be instructed to tune in to your local emergency broadcast station for further instructions.",
      image: "https://dummyimage.com/500x300/",
      tags: ["Education"],
    },
    {
      title: "Hospitality",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Heloo world this is a test of the emergency broadcast system. This is only a test. If this were a real emergency, you would be instructed to tune in to your local emergency broadcast station for further instructions.",
      image: "https://dummyimage.com/500x300/",
      tags: ["Hospitality"],
    },
    {
      title: "Healthcare",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Heloo world this is a test of the emergency broadcast system. This is only a test. If this were a real emergency, you would be instructed to tune in to your local emergency broadcast station for further instructions.",
      image: "https://dummyimage.com/500x300/",
      tags: ["Healthcare"],
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop
      setScrollSpeed(scrollTop / 100) // Adjust this value for desired sensitivity
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="h-fit bg-black pt-6 pb-12 lg:px-24 px-10">
      <Marquee autoFill={true} speed={scrollSpeed} className="w-full">
        <h1
          className="w-screen text-center lg:text-[160px] text-[80px] font-semibold relative font-serif"
          style={{ WebkitTextStroke: "1px white", color: "black" }}
        >
          PROJECT {"   "}
        </h1>
      </Marquee>
      <div className="flex flex-wrap justify-around space-y-10 pt-10">
        {data.map((project, index) => (
          <div key={index} className="w-[500px] space-y-4">
            <img
              src={project.image}
              className="rounded-3xl"
              alt={project.title}
            />
            <div className="flex items-center space-x-4">
              <CardTitle className="text-white">{project.title}</CardTitle>
              {
                // Display tags
                project.tags.map((tag, i) => (
                  <Button key={i} variant="stack">
                    {tag}
                  </Button>
                ))
              }
            </div>
            <CardDescription>{project.description}</CardDescription>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project
