import { splitProps } from "solid-js"
function FlowIcon(props) {
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
			<path d="M15 4a3 3 0 00-2.96 2.5A2.5 2.5 0 009.73 8.6l-.44 2.66a1.5 1.5 0 01-1.33 1.24 3 3 0 100 1 2.5 2.5 0 002.31-2.08l.44-2.66a1.5 1.5 0 011.33-1.24A3 3 0 1015 4z" />
		</svg>
	)
}
export default FlowIcon
