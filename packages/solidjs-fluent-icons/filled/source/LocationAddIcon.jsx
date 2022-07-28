import { splitProps } from "solid-js"
function LocationAddIcon(props) {
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
			<path d="M14.95 4.05a7 7 0 010 9.9l-1.13 1.12-2.43 2.37a2 2 0 01-2.64.12l-.14-.12-2.04-1.99-1.52-1.5a7 7 0 019.9-9.9zM10 5a.5.5 0 00-.5.5V8H7a.5.5 0 000 1h2.5v2.5a.5.5 0 001 0V9H13a.5.5 0 000-1h-2.5V5.5A.5.5 0 0010 5z" />
		</svg>
	)
}
export default LocationAddIcon
