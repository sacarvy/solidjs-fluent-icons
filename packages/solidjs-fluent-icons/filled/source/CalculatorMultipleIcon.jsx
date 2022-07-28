import { splitProps } from "solid-js"
function CalculatorMultipleIcon(props) {
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
			<path d="M5.5 2A2.5 2.5 0 003 4.5v9A2.5 2.5 0 005.5 16h7a2.5 2.5 0 002.5-2.5v-9A2.5 2.5 0 0012.5 2h-7zM5 5a1 1 0 011-1h6a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V5zm0 5a1 1 0 112 0 1 1 0 01-2 0zm4-1a1 1 0 110 2 1 1 0 010-2zm0 2.75a1 1 0 110 2 1 1 0 010-2zM11 10a1 1 0 112 0 1 1 0 01-2 0zm1 1.75a1 1 0 110 2 1 1 0 010-2zm-6 0a1 1 0 110 2 1 1 0 010-2zM7.5 18a2.5 2.5 0 01-2-1h7a3.5 3.5 0 003.5-3.5v-9c.6.46 1 1.18 1 2v7a4.5 4.5 0 01-4.5 4.5h-5z" />
		</svg>
	)
}
export default CalculatorMultipleIcon
