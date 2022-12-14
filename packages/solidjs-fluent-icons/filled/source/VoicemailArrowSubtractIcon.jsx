import { splitProps } from "solid-js"
function VoicemailArrowSubtractIcon(props) {
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
			<path d="M13 8a2 2 0 011.74 1c1.23.06 2.37.52 3.26 1.26V6a2 2 0 00-2-2H4a2 2 0 00-2 2v8c0 1.1.9 2 2 2h5.2a5.5 5.5 0 011.81-5.76A2.02 2.02 0 0111.27 9H8.73A2 2 0 117 8h6zm-7 2a1 1 0 112 0 1 1 0 01-2 0zm13 4.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-7 0c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default VoicemailArrowSubtractIcon
