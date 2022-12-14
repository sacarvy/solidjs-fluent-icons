import { splitProps } from "solid-js"
function BookArrowClockwiseIcon(props) {
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
			<path d="M18 2.98a.5.5 0 01-.5.5h-2a.5.5 0 010-1h.8a3.5 3.5 0 101.7 3 .5.5 0 011 0 4.5 4.5 0 11-2-3.74V.98a.5.5 0 01.5-.5c.28 0 .5.22.5.5v2zM9.02 6A5.5 5.5 0 0016 10.77V15a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2V4c0-1.1.9-2 2-2h4.24a5.5 5.5 0 00-1.22 4z" />
		</svg>
	)
}
export default BookArrowClockwiseIcon
