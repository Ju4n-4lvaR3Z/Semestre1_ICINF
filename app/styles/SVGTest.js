import * as React from "react"
import Svg, { G, Path, Defs } from "react-native-svg"

/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = () => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={60}
    fill="none"
  >
    <G filter="url(#a)">
      <G filter="url(#b)">
        <Path
          fill="#EFB111"
          d="M4 51.06v-6.37c0-.22.18-.4.4-.4h37.624c.221 0 .4.18.4.4v6.37a.4.4 0 0 1-.4.4H4.4a.4.4 0 0 1-.4-.4Z"
        />
      </G>
      <G filter="url(#c)">
        <Path
          fill="#00696C"
          d="M10.161 24.686c-2.655-.085-5.044 1.46-6.033 2.346a.381.381 0 0 0-.124.295c.032 1.452.07 4.235.024 6.081-.008.33.365.538.646.366 2.746-1.679 4.994-1.987 5.823-1.918 3.697 0 5.266 3.249 8.066 3.249 3.473 0 6.162-3.249 9.634-3.249 3.473 0 4.817 3.249 8.178 3.249 2.57 0 4.869-1.503 5.816-2.352a.378.378 0 0 0 .124-.279c.023-1.521.014-4.124.045-5.984.007-.428-.765-.705-1.094-.43-1.612 1.348-3.863 1.68-5.003 1.651-3.249 0-4.705-2.901-8.29-3.025-3.248-.112-5.601 3.025-9.41 3.025s-4.929-2.913-8.402-3.025Z"
        />
      </G>
      <G filter="url(#d)">
        <Path
          fill="#FF3D36"
          d="M4.112 12.973V7.238c0-.248.23-.435.475-.394 20.66 3.515 32.3-.215 37.142-2.553.27-.13.583.066.583.366v5.674a.4.4 0 0 1-.214.353c-12.483 6.536-25.397 5.163-37.666 2.679a.397.397 0 0 1-.32-.39Z"
        />
      </G>
    </G>
    <Defs></Defs>
  </Svg>
)
export default SvgComponent