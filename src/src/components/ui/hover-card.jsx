import * as React from "react"
import * as HoverCardPrimitive from "@radix-ui/react-hover-card"
import { cn } from "../../lib/utils"

const HoverCard = HoverCardPrimitive.Root

const HoverCardTrigger = ({ children, ...props }) => {
  const [cursorPos, setCursorPos] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = e => {
    setCursorPos({
      x: e.clientX,
      y: e.clientY,
    })
  }

  return (
    <div onMouseMove={handleMouseMove}>
      <HoverCardPrimitive.Trigger {...props}>
        {children}
      </HoverCardPrimitive.Trigger>
      {/* Pass cursor position as context */}
      {React.cloneElement(props.content, { cursorPos })}
    </div>
  )
}

const HoverCardContent = React.forwardRef(
  (
    { className, cursorPos = { x: 0, y: 0 }, sideOffset = 4, ...props },
    ref
  ) => {
    return (
      <HoverCardPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none",
          className
        )}
        style={{
          position: "absolute",
          top: cursorPos.y + 10, // Small offset for better UX
          left: cursorPos.x + 10,
          transform: "translate(-50%, -50%)", // Center relative to the cursor
        }}
        {...props}
      />
    )
  }
)
HoverCardContent.displayName = HoverCardPrimitive.Content.displayName

export { HoverCard, HoverCardTrigger, HoverCardContent }
