import { splitProps } from "solid-js"
function VoteIcon(props) {
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
			<path d="M13.5 9h-1.27l1.73-3a1 1 0 00-.36-1.37L11 3.13a1 1 0 00-1.37.37l-2.5 4.33A1 1 0 007.26 9H6.5a.5.5 0 000 1h7a.5.5 0 000-1zm-3-5l2.6 1.5L11.08 9H9.16L8 8.33 10.5 4zm4.04 3l-.58 1h.54l2.25 3H3.25L5.5 8h.4a1 1 0 01.08-.17L6.46 7H5.5a1 1 0 00-.8.4l-2.5 3.33a1 1 0 00-.2.6V16a1 1 0 001 1h14a1 1 0 001-1v-4.67a1 1 0 00-.2-.6L15.3 7.4a1 1 0 00-.76-.4z" />
		</svg>
	)
}
export default VoteIcon
