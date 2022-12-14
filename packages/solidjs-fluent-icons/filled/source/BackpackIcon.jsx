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
			<path d="M8 8.7c0-.39.31-.7.7-.7h2.6c.39 0 .7.31.7.7a.3.3 0 01-.3.3H8.3a.3.3 0 01-.3-.3zM10 2a2.5 2.5 0 00-2.5 2.5v.04A6 6 0 004 10v2h12v-2a6 6 0 00-3.5-5.46V4.5A2.5 2.5 0 0010 2zm0 2c.5 0 1 .06 1.47.18a1.5 1.5 0 00-2.94 0C9 4.06 9.5 4 10 4zM8.7 7h2.6c.94 0 1.7.76 1.7 1.7 0 .72-.58 1.3-1.3 1.3H8.3A1.3 1.3 0 017 8.7C7 7.76 7.76 7 8.7 7zM7 14.5V13H4v2a3 3 0 003 3h6a3 3 0 003-3v-2H8v1.5a.5.5 0 01-1 0z" />
		</svg>
	)
}
export default BackpackIcon
