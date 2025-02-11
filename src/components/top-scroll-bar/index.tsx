
import React from "react"
import { motion, useScroll } from "framer-motion"

interface TopScrollProps {
  rounded?: boolean;
  style?: React.CSSProperties;
  originFrom?: "left" | "right"
}

const TopScrollBar = ({ ...props }: TopScrollProps) => {
  const { scrollYProgress } = useScroll();
  const origin = props.originFrom
  return (
    <motion.div
      style={{
        transformOrigin: origin,
        scaleX: scrollYProgress,
        borderRadius: props.rounded ? "50px" : "0px",
        ...baseStyle,
        ...props.style,
      }}
    >
    </motion.div>
  )
}
export { TopScrollBar }



const baseStyle: React.CSSProperties = {
  height: "10px",
  backgroundColor: "red",
  position: "fixed",
  width: "100%",
  top: 0,
  left: 0
}