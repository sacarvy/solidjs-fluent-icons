import { splitProps } from "solid-js"
function ResizeIcon(props) {
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
			<path d="M5 2a3 3 0 00-3 3v3.5a.5.5 0 001 0V5c0-1.1.9-2 2-2h3.5a.5.5 0 000-1H5zm6.5 0a.5.5 0 000 1H15a2 2 0 012 2v3.5a.5.5 0 001 0V5a3 3 0 00-3-3h-3.5zm-9 9c.28 0 .5.22.5.5V15c0 1.1.9 2 2 2h3.5a.5.5 0 010 1H5a3 3 0 01-3-3v-3.5c0-.28.22-.5.5-.5zm15.5.5a.5.5 0 00-1 0V15a2 2 0 01-2 2h-3.5a.5.5 0 000 1H15a3 3 0 003-3v-3.5z" />
		</svg>
	)
}
export default ResizeIcon
