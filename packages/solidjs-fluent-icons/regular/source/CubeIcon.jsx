import { splitProps } from "solid-js"
function CubeIcon(props) {
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
			<path d="M5.7 6.04a.5.5 0 10-.4.92l4.2 1.86v4.68a.5.5 0 001 0V8.82l4.2-1.86a.5.5 0 10-.4-.92L10 7.95l-4.3-1.9zm5.6-3.56a3.5 3.5 0 00-2.6 0l-5.76 2.3A1.5 1.5 0 002 6.18v7.64c0 .62.37 1.17.94 1.4l5.76 2.3a3.5 3.5 0 002.6 0l5.76-2.3c.57-.23.94-.78.94-1.4V6.18a1.5 1.5 0 00-.94-1.4l-5.76-2.3zm-2.23.93a2.5 2.5 0 011.86 0l5.76 2.3a.5.5 0 01.31.47v7.64a.5.5 0 01-.31.47l-5.76 2.3a2.5 2.5 0 01-1.86 0l-5.76-2.3a.5.5 0 01-.31-.47V6.18c0-.2.12-.4.31-.47l5.76-2.3z" />
		</svg>
	)
}
export default CubeIcon
