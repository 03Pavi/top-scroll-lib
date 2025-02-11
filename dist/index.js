import React from 'react';
import { useScroll, motion } from 'framer-motion';

const TopScrollBar = ({ ...props }) => {
    const { scrollYProgress } = useScroll();
    const origin = props.originFrom;
    return (React.createElement(motion.div, { style: {
            transformOrigin: origin,
            scaleX: scrollYProgress,
            borderRadius: props.rounded ? "50px" : "0px",
            ...baseStyle,
            ...props.style,
        } }));
};
const baseStyle = {
    height: "10px",
    backgroundColor: "red",
    position: "fixed",
    width: "100%",
    top: 0,
    left: 0
};

export { TopScrollBar };
