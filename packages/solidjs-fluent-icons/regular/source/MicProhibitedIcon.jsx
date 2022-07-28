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
			<path d="M9 13h.2c.12-.4.27-.76.46-1.11A2 2 0 017 10V5a2 2 0 114 0v5c0 .1 0 .18-.02.27.31-.26.66-.48 1.02-.67V5a3 3 0 10-6 0v5a3 3 0 003 3zm-4.5-3A4.5 4.5 0 009 14.5c0 .82.18 1.6.5 2.3v.7a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0zm10 9a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm0-8a3.5 3.5 0 00-2.8 5.6l4.9-4.9a3.48 3.48 0 00-2.1-.7zm-2.1 6.3a3.5 3.5 0 004.9-4.9l-4.9 4.9z" />
		</svg>
	)
}
export default MicProhibitedIcon
