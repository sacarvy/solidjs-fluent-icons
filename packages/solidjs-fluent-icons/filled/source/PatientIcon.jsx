import { splitProps } from "solid-js"
function PatientIcon(props) {
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
			<path d="M10 4a2 2 0 100 4 2 2 0 000-4zM6.5 14.5a.5.5 0 000 1h7a.5.5 0 000-1h-7zM4 4c0-1.1.9-2 2-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm10-1H6a1 1 0 00-1 1v8h2v-2a1 1 0 011-1h4a1 1 0 011 1v2h2V4a1 1 0 00-1-1zM5 13v3a1 1 0 001 1h8a1 1 0 001-1v-3H5z" />
		</svg>
	)
}
export default PatientIcon
