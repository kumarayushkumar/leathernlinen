import { SVGProps } from "react"


export const Hamburger = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg width="800px" height="800px" viewBox="0 0 24 24" fill={props.fill} {...props} xmlns="http://www.w3.org/2000/svg">
            <path d="M10 18L20 18" stroke="#000000" stroke-width="1" stroke-linecap="round" />
            <path d="M4 12L20 12" stroke="#000000" stroke-width="1" stroke-linecap="round" />
            <path d="M4 6L20 6" stroke="#000000" stroke-width="1" stroke-linecap="round" />
        </svg>
    )
}