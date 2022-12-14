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
			<path d="M17 9.6V6a1 1 0 00-1-1H4a1 1 0 00-1 1v8a1 1 0 001 1h5.02c.03.34.1.68.19 1H4a2 2 0 01-2-2V6c0-1.1.9-2 2-2h12a2 2 0 012 2v4.26a5.5 5.5 0 00-1-.66zM9 10a2 2 0 00-.27-1h2.54a2 2 0 00-.26 1.24c.34-.27.7-.5 1.1-.7a1 1 0 011.33-.44 5.53 5.53 0 011.3-.1A2 2 0 0013 8H7a2 2 0 102 2zm-2 1a1 1 0 110-2 1 1 0 010 2zm12 3.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-7 0c0 .28.22.5.5.5h4a.5.5 0 000-1h-4a.5.5 0 00-.5.5z" />
		</svg>
	)
}
export default VoicemailArrowSubtractIcon
