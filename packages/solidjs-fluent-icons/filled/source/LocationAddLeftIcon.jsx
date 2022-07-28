import { splitProps } from "solid-js"
function LocationAddLeftIcon(props) {
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
			<path d="M14.95 13.96a7 7 0 10-9.9 0l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37 1.13-1.12zm-5.1-7.6L8.21 8H13a.5.5 0 010 1H8.2l1.65 1.65a.5.5 0 01-.7.7l-2.5-2.5a.5.5 0 010-.7l2.5-2.5a.5.5 0 11.7.7z" />
		</svg>
	)
}
export default LocationAddLeftIcon
