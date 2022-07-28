import { splitProps } from "solid-js"
function PhonePaginationIcon(props) {
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
			<path d="M5 4c0-1.1.9-2 2-2h6a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V4zm3 11a.5.5 0 100-1 .5.5 0 000 1zm2 0a.5.5 0 100-1 .5.5 0 000 1zm2.5-.5a.5.5 0 10-1 0 .5.5 0 001 0z" />
		</svg>
	)
}
export default PhonePaginationIcon
