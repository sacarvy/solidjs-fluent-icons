import { splitProps } from "solid-js"
function LeafTwoIcon(props) {
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
			<path d="M3.32 3C2.59 3 2 3.59 2 4.32V8a5 5 0 004.49 4.97 6.48 6.48 0 01-.05-4.82l-1.3-1.3a.5.5 0 11.71-.7L6.9 7.19a6.52 6.52 0 013.51-2.85A4.98 4.98 0 007 3H3.32zm4.95 11.02l-2.13 2.14a.5.5 0 10.7.7l2.14-2.13A5.5 5.5 0 0018 10.5V6.4c0-.77-.63-1.4-1.4-1.4h-4.1a5.5 5.5 0 00-4.23 9.02zm4.58-3.17L9.7 14.02c-.26-.21-.5-.45-.7-.71l3.16-3.16a.5.5 0 01.7.7z" />
		</svg>
	)
}
export default LeafTwoIcon
