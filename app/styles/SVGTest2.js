import * as React from "react"
import Svg, { G, Rect, Defs, Pattern, Use, Image } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgTest2 = () => (
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={60}
    height={60}
    fill="none"
  >
    <G filter="url(#a)" shapeRendering="crispEdges">
      <Rect width={50} height={50} x={5} y={5} fill="url(#b)" rx={23} />
      <Rect
        width={50}
        height={50}
        x={5}
        y={5}
        stroke="#568C9C"
        strokeLinejoin="round"
        strokeWidth={3}
        rx={24.5}
      />
    </G>
  </Svg>
)
export default SvgTest2
