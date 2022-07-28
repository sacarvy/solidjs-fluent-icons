import { splitProps } from "solid-js"
function DocumentSearchIcon(props) {
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
			<path d="M5 2h5v4.5c0 .83.67 1.5 1.5 1.5H16v9a1 1 0 01-1 1h-1.09a1.5 1.5 0 00-.35-.56l-3.13-3.13A4.98 4.98 0 006 7c-.71 0-1.39.15-2 .42V3a1 1 0 011-1zm6 0l5 5h-4.5a.5.5 0 01-.5-.5V2zm-1 10c0 .92-.31 1.78-.84 2.45l3.7 3.7a.5.5 0 11-.72.7l-3.69-3.69A4 4 0 1110 12zm-4 3a3 3 0 100-6 3 3 0 000 6z" />
		</svg>
	)
}
export default DocumentSearchIcon
