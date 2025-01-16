import React, { useState, useEffect, useRef } from "react"
import { DollarSign, Globe, Users, Activity } from "lucide-react" // Importing icons
import WorksProvide from "./WorksProvide"

const Stats = () => {
  const stats = [
    {
      id: 1,
      name: "Transactions every 24 hours",
      value: 50,
      icon: "%",
    },
    { id: 2, name: "Assets under holding", value: 250, icon: "+" },
    { id: 3, name: "New users annually", value: 45, icon: "/-" },
    { id: 4, name: "Countries served", value: 120, icon: "+" },
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
    <div ref={statsRef} className=" py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-4">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map(stat => (
            <div
              key={stat.id}
              className="mx-auto flex max-w-xs flex-col gap-y-4 items-center"
            >
              <dt className="text-base leading-7 text-gray-500">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-8xl">
                <AnimatedCounter endValue={stat.value} isVisible={isVisible} />{" "}
                {stat.icon}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
export default Stats
