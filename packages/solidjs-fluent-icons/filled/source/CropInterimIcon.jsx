import { splitProps } from "solid-js"
function CropInterimIcon(props) {
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
			<path d="M7 4h3a2 2 0 001.77 1.99l.47 4.16A2 2 0 0011 12H6a2 2 0 00-1.24-1.85L5.23 6A2 2 0 007 4zm6.23 6.01l-.47-4.16A2 2 0 1010.26 3H6.74a2 2 0 10-2.5 2.85L3.78 10A2 2 0 105.73 13h5.54a2 2 0 101.96-2.99zm.74-2.4A4.5 4.5 0 119.65 15h.85a.5.5 0 000-1h-2a.5.5 0 00-.5.5v2a.5.5 0 001 0v-.72A5.48 5.48 0 0018.5 12a5.5 5.5 0 00-4.65-5.43l.12 1.03z" />
		</svg>
	)
}
export default CropInterimIcon
