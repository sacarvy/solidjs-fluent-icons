import { splitProps } from "solid-js"
function InsertIcon(props) {
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
			<path d="M4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm0 12c0 1.1.9 2 2 2h8a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2zM2.5 9.5a.5.5 0 000 1h15a.5.5 0 000-1h-15z" />
		</svg>
	)
}
export default InsertIcon
