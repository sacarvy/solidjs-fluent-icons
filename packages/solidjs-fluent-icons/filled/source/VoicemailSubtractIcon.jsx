import { splitProps } from "solid-js"
function VoicemailSubtractIcon(props) {
	const [local, others] = splitProps(props, ["style", "hidden", "ref", "children"])
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 16 16"
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
			<path d="M4 5.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM9.25 4c.7 0 1.3.41 1.59 1.01.77.05 1.5.25 2.16.59V2.5c0-.83-.67-1.5-1.5-1.5h-9C1.67 1 1 1.67 1 2.5V9c0 .83.67 1.5 1.5 1.5H5c0-1.93 1-3.63 2.5-4.61A1.78 1.78 0 017.68 5H6.33a1.75 1.75 0 11-1.58-1h4.5zm-.62 1.33c.3-.11.62-.2.95-.25a.75.75 0 00-.95.25zM15 10.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2 0a.5.5 0 00-.5-.5h-4a.5.5 0 000 1h4a.5.5 0 00.5-.5z" />
		</svg>
	)
}
export default VoicemailSubtractIcon
