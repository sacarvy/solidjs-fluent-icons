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
			<path d="M17.5 3.48a.5.5 0 00.5-.5v-2a.5.5 0 00-1 0v.76a4.5 4.5 0 102 3.74.5.5 0 00-1 0 3.5 3.5 0 11-1.7-3h-.8a.5.5 0 000 1h2zm-1.5 7.3c-.32.08-.66.15-1 .18V15H5V4a1 1 0 011-1h3.59c.18-.36.4-.7.65-1H6a2 2 0 00-2 2v12c0 1.1.9 2 2 2h9.5a.5.5 0 000-1H6a1 1 0 01-1-1h10a1 1 0 001-1v-4.23z" />
		</svg>
	)
}
export default BookArrowClockwiseIcon
