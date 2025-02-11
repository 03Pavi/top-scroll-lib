import React from "react";
interface TopScrollProps {
    rounded?: boolean;
    style?: React.CSSProperties;
    originFrom?: "left" | "right";
}
declare const TopScrollBar: ({ ...props }: TopScrollProps) => React.JSX.Element;
export { TopScrollBar };
