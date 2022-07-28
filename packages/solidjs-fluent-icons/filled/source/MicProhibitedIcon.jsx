import { splitProps } from "solid-js"
function MicProhibitedIcon(props) {
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
			<path d="M9.2 13A5.51 5.51 0 0112 9.6V5a3 3 0 10-6 0v5a3 3 0 003.2 3zm.3 4.5v-.7c-.32-.7-.5-1.48-.5-2.3A4.5 4.5 0 014.5 10a.5.5 0 00-1 0 5.5 5.5 0 005 5.48v2.02a.5.5 0 001 0zm5 1.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-8a3.5 3.5 0 00-2.8 5.6l4.9-4.9a3.48 3.48 0 00-2.1-.7zm-2.1 6.3a3.5 3.5 0 004.9-4.9l-4.9 4.9z" />
		</svg>
	)
}
export default MicProhibitedIcon
