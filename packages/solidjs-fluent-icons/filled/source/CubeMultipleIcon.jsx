import { splitProps } from "solid-js"
function CubeMultipleIcon(props) {
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
			<path d="M8.2 2.51a5 5 0 013.6 0l4.24 1.64c.58.22.96.77.96 1.4v.14a2.5 2.5 0 00-.6-.34l-4.96-1.9a4 4 0 00-2.88 0L3.6 5.35c-.22.09-.42.2-.6.34v-.14c0-.63.38-1.18.96-1.4L8.21 2.5zm2.88 1.87a3 3 0 00-2.16 0l-4.96 1.9A1.5 1.5 0 003 7.69v6.63c0 .62.38 1.18.96 1.4l4.96 1.91a3 3 0 002.16 0l4.96-1.9c.58-.23.96-.79.96-1.4V7.68a1.5 1.5 0 00-.96-1.4l-4.96-1.91zM6.04 8.3a.5.5 0 01.66-.26L10 9.46l3.3-1.42a.5.5 0 01.4.92l-3.2 1.37v3.17a.5.5 0 11-1 0v-3.17L6.3 8.96a.5.5 0 01-.26-.66z" />
		</svg>
	)
}
export default CubeMultipleIcon
