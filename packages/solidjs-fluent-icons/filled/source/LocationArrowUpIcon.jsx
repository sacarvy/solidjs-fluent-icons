import { splitProps } from "solid-js"
function LocationArrowUpIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 48 48"
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
			<path d="M37 32L26.91 42.7a4 4 0 01-5.82 0L11 32h.04l-.02-.02-.02-.03A17.05 17.05 0 017 21a17 17 0 1130 10.95l-.02.03-.02.02H37zm-8.88-12.12a1.25 1.25 0 001.76-1.76l-5-5a1.25 1.25 0 00-1.76 0l-5 5a1.25 1.25 0 001.76 1.76l2.87-2.86V28a1.25 1.25 0 102.5 0V17.02l2.87 2.86z" />
		</svg>
	)
}
export default LocationArrowUpIcon
