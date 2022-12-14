import { splitProps } from "solid-js"
function BorderTopBottomThickIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			shape-rendering="geometricPrecision"
			fill="currentColor"
			aria-hidden="true"
			preserveAspectRatio="xMidYMid meet"
			style={
				typeof props?.style === "string"
					? `display:${props?.hidden ? "none" : "block"}` + ";" + props.style
					: { display: props?.hidden ? "none" : "block", ...props?.style }
			}
			ref={props.ref}
			{...others}
		>
			<path d="M6 4.5a1.5 1.5 0 00-1.43 1.04.75.75 0 01-1.38-.58A3 3 0 016 3h8a3 3 0 012.81 1.96.75.75 0 01-1.38.58A1.5 1.5 0 0014 4.5H6zM3.75 12a.75.75 0 01-.75-.75v-2.5a.75.75 0 011.5 0v2.5c0 .41-.34.75-.75.75zM14 15.5H6a1.5 1.5 0 01-1.43-1.04.75.75 0 00-1.38.58A3 3 0 006 17h8a3 3 0 002.81-1.96.75.75 0 00-1.38-.58l-.03.08a1.5 1.5 0 01-1.4.96zm1.5-4.25a.75.75 0 001.5 0v-2.5a.75.75 0 00-1.5 0v2.5z" />
		</svg>
	)
}
export default BorderTopBottomThickIcon
