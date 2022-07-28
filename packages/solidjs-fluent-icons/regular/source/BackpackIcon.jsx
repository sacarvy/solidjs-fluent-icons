import { splitProps } from "solid-js"
function BackpackIcon(props) {
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
			<path d="M8.7 7C7.76 7 7 7.76 7 8.7c0 .72.58 1.3 1.3 1.3h3.4c.72 0 1.3-.58 1.3-1.3 0-.94-.76-1.7-1.7-1.7H8.7zM8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3zM10 2a2.5 2.5 0 00-2.5 2.5v.04A6 6 0 004 10v5a3 3 0 003 3h6a3 3 0 003-3v-5a6 6 0 00-3.5-5.46V4.5A2.5 2.5 0 0010 2zm5 10H5v-2a5 5 0 0110 0v2zm-8 2.5a.5.5 0 001 0V13h7v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2h2v1.5zM10 4c-.5 0-1 .06-1.47.18a1.5 1.5 0 012.94 0A6.01 6.01 0 0010 4z" />
		</svg>
	)
}
export default BackpackIcon
