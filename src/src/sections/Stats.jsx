import React, { useState, useEffect, useRef } from "react"
import { DollarSign, Globe, Users, Activity } from "lucide-react" // Importing icons

const Stats = () => {
  const stats = [
    {
      id: 1,
      name: "Transactions every 24 hours",
      value: 44000,
      icon: Activity,
    },
    { id: 2, name: "Assets under holding", value: 11900, icon: DollarSign },
    { id: 3, name: "New users annually", value: 46000, icon: Users },
    { id: 4, name: "Countries served", value: 190, icon: Globe },
  ]

  const AnimatedCounter = ({ endValue, isVisible }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      if (!isVisible) return

      let start = 0
      const duration = 2000 // Duration of animation in ms (2 seconds)
      const step = timestamp => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        setCount(Math.floor(progress * endValue)) // Update count
        if (progress < 1) {
          requestAnimationFrame(step) // Continue animation
        }
      }
      requestAnimationFrame(step) // Start animation
    }, [endValue, isVisible])

    return <>{count.toLocaleString()}</> // Format the number with commas
  }

  const [isVisible, setIsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the component is visible
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])

  return (
    <div ref={statsRef} className="bg-white py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            At Torc Infotech, our relentless aim is to innovate technology
            solutions that enhance
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500">
            Customer experiences and bring the world close to the mainstream
            adoption of digitalization and automation technology practices.
          </p>
        </div>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map(stat => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 items-center"
            >
              <stat.icon className="h-10 w-10 text-gray-600" />{" "}
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                <AnimatedCounter endValue={stat.value} isVisible={isVisible} />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Stats
