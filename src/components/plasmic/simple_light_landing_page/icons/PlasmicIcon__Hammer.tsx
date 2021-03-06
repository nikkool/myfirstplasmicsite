// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react"
import { classNames } from "@plasmicapp/react-web"

export type HammerIconProps = React.ComponentProps<"svg"> & {
  title?: string
}

export function HammerIcon(props: HammerIconProps) {
  const { className, style, title, ...restProps } = props
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 50 44"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M49.538 20.723l-4.855 4.852a1.5 1.5 0 01-2.121 0l-2.014-2.012a1.44 1.44 0 01-.365-1.258 4.03 4.03 0 00-1.472-3.405c-1.563-1.563-3.206-1.94-3.987-1.159l-1.695 1.695a2 2 0 01-2.828 0l-5.656-5.653a1.999 1.999 0 010-2.827l2.984-2.983a.974.974 0 00-.004-1.369c-3.856-3.949-8.356-2.754-11.735-.738a1.01 1.01 0 01-1.157-.156l-.436-.435a.76.76 0 01.012-1.076l.005-.005C19.06-.65 29.33-1.595 33.924 2.995l7.098 7.095c.316.337.452.805.365 1.258a4.03 4.03 0 001.472 3.405 4.034 4.034 0 003.407 1.472 1.44 1.44 0 011.259.365l2.013 2.012c.586.585.586 1.534.001 2.12zm-25.344-4.28l3.367 3.365c.587.587.597 1.535.024 2.135L7.694 42.728a4.073 4.073 0 01-5.822.064L1.2 42.12a4.068 4.068 0 01.064-5.819l20.795-19.88a1.528 1.528 0 012.136.023z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  )
}

export default HammerIcon
/* prettier-ignore-end */
