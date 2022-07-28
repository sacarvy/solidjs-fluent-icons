import { splitProps } from "solid-js"
function CalendarMultipleIcon(props) {
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
			<path d="M16 13.5V6H2v7.5A2.5 2.5 0 004.5 16h9a2.5 2.5 0 002.5-2.5zm0-9A2.5 2.5 0 0013.5 2h-9A2.5 2.5 0 002 4.5V5h14v-.5zM5 17c.46.6 1.18 1 2 1h6.5a4.5 4.5 0 004.5-4.5v-7c0-.82-.4-1.54-1-2v9a3.5 3.5 0 01-3.5 3.5H5z" />
		</svg>
	)
}
export default CalendarMultipleIcon
