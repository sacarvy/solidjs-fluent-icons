import { splitProps } from "solid-js"
function ClockToolboxIcon(props) {
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
			<path d="M4.5 9c-.56 0-1.08.19-1.5.5a7.5 7.5 0 118 7.48V13.5a2.5 2.5 0 00-2.04-2.46A2.5 2.5 0 006.5 9h-2zm6-4a.5.5 0 00-.5.5v4.09a.5.5 0 00.5.41h3.09a.5.5 0 00-.09-1H11V5.41a.5.5 0 00-.5-.41zM3 12v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15H8v-.5a.5.5 0 00-1 0v.5H4v-.5a.5.5 0 00-1 0v.5H1v-1.5c0-.83.67-1.5 1.5-1.5H3zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zM8 16h2v1.5c0 .83-.67 1.5-1.5 1.5h-6A1.5 1.5 0 011 17.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z" />
		</svg>
	)
}
export default ClockToolboxIcon
