import { splitProps } from "solid-js"
function LocationOffIcon(props) {
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
			<path d="M2.85 2.15a.5.5 0 10-.7.7l2.12 2.13a7 7 0 00.78 8.98l1.52 1.5 2.04 1.98.14.12a2 2 0 002.64-.12l2.43-2.37.27-.27 3.06 3.05a.5.5 0 00.7-.7l-15-15zm8.23 9.63A2.98 2.98 0 017 9c0-.38.07-.74.2-1.07l3.87 3.86zM12.99 9c0 .54-.14 1.05-.4 1.49l2.9 2.88a7 7 0 00-9.85-9.84L8.52 6.4A3 3 0 0113 9z" />
		</svg>
	)
}
export default LocationOffIcon
