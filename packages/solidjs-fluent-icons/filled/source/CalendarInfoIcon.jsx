import { splitProps } from "solid-js"
function CalendarInfoIcon(props) {
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
			<path d="M17 7v2.6A5.5 5.5 0 009.6 17H5.5A2.5 2.5 0 013 14.5V7h14zm-2.5-4A2.5 2.5 0 0117 5.5V6H3v-.5A2.5 2.5 0 015.5 3h9zm-.63 9.5a.62.62 0 111.25 0 .62.62 0 01-1.24 0zm1.13 4a.5.5 0 01-1 0v-2a.5.5 0 011 0v2zm-5-2a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm1 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" />
		</svg>
	)
}
export default CalendarInfoIcon
